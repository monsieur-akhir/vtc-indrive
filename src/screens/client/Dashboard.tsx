import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firestore } from '../../services/firebase';
import { getCurrentUser } from '../../services/authService';
import { requestNotificationPermission, getFCMToken } from '../../services/notificationService';

const ClientDashboard = () => {
  const [lastRide, setLastRide] = useState(null);

  useEffect(() => {
    const fetchLastRide = async () => {
      const user = getCurrentUser();
      if (user) {
        const rideSnapshot = await firestore()
          .collection('rides')
          .where('clientId', '==', user.uid)
          .orderBy('createdAt', 'desc')
          .limit(1)
          .get();

        if (!rideSnapshot.empty) {
          setLastRide(rideSnapshot.docs[0].data());
        }
      }
    };

    fetchLastRide();
    setupNotifications();
  }, []);

  const setupNotifications = async () => {
    const hasPermission = await requestNotificationPermission();
    if (hasPermission) {
      const token = await getFCMToken();
      if (token) {
        const user = getCurrentUser();
        await firestore().collection('users').doc(user.uid).update({
          fcmToken: token,
        });
      }
    }
  };

  const requestNewRide = () => {
    // Implement ride request logic
    console.log('Requesting new ride');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tableau de bord</Text>
      
      {lastRide && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dernière course</Text>
          <View style={styles.infoRow}>
            <Icon name="location-outline" size={20} color="#4A90E2" />
            <Text style={styles.infoText}>{lastRide.destination}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="time-outline" size={20} color="#4A90E2" />
            <Text style={styles.infoText}>{new Date(lastRide.createdAt.toDate()).toLocaleString()}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="card-outline" size={20} color="#4A90E2" />
            <Text style={styles.infoText}>{lastRide.price.toFixed(2)} €</Text>
          </View>
        </View>
      )}
      
      <TouchableOpacity style={styles.button} onPress={requestNewRide}>
        <Text style={styles.buttonText}>Nouvelle course</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClientDashboard;