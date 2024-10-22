import { firestore } from './firebase';
import { getCurrentUser } from './authService';

export const requestRide = async (origin: string, destination: string, proposedPrice: number) => {
  const user = getCurrentUser();
  if (!user) throw new Error('User not authenticated');

  const rideRef = await firestore().collection('rides').add({
    clientId: user.uid,
    origin,
    destination,
    proposedPrice,
    status: 'pending',
    createdAt: firestore.FieldValue.serverTimestamp(),
  });

  return rideRef.id;
};

export const acceptRide = async (rideId: string, counterOffer?: number) => {
  const user = getCurrentUser();
  if (!user) throw new Error('User not authenticated');

  await firestore().collection('rides').doc(rideId).update({
    driverId: user.uid,
    status: 'accepted',
    counterOffer: counterOffer || null,
    acceptedAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const getRideDetails = async (rideId: string) => {
  const rideDoc = await firestore().collection('rides').doc(rideId).get();
  if (!rideDoc.exists) throw new Error('Ride not found');
  return rideDoc.data();
};

export const getAvailableRides = async () => {
  const ridesSnapshot = await firestore()
    .collection('rides')
    .where('status', '==', 'pending')
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();

  return ridesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};