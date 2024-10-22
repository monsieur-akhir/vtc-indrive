import { messaging } from './firebase';

export const requestNotificationPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to get push token', error);
    return false;
  }
};

export const getFCMToken = async () => {
  try {
    return await messaging().getToken();
  } catch (error) {
    console.error('Failed to get FCM token', error);
    return null;
  }
};

export const onMessageReceived = (callback: (message: any) => void) => {
  return messaging().onMessage(callback);
};