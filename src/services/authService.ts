import { auth, firestore } from './firebase';

export const signUp = async (email: string, password: string, name: string, phoneNumber: string, userType: 'client' | 'driver') => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    if (user) {
      await firestore.collection('users').doc(user.uid).set({
        name,
        phoneNumber,
        userType,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    }
    
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};