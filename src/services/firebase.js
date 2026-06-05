export const firebaseCollections = {
  users: ['id', 'name', 'phone', 'email'],
  turf_bookings: ['id', 'name', 'phone', 'date', 'startTime', 'duration', 'amount', 'status', 'createdAt'],
  badminton_bookings: ['id', 'name', 'phone', 'court', 'date', 'startTime', 'duration', 'amount', 'status', 'createdAt'],
  gallery: ['id', 'image', 'category']
};

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export async function createBooking(collectionName, payload) {
  return {
    id: crypto.randomUUID(),
    collectionName,
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...payload
  };
}

export async function sendBookingNotification(_booking) {
  return { whatsappReady: true, emailReady: true, razorpayReady: true };
}
