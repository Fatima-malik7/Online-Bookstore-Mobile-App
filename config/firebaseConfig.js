import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, remove, push } from 'firebase/database'; // Corrected to include push
import { getAuth } from 'firebase/auth'; // Authentication service (if required)

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAjuXnhnH5gJ29dTGXbg67KiGQ3ZeNKPA8",
  authDomain: "bookbliss-f0256.firebaseapp.com",
  databaseURL: "https://bookbliss-f0256-default-rtdb.firebaseio.com",
  projectId: "bookbliss-f0256",
  storageBucket: "bookbliss-f0256.firebasestorage.app",
  messagingSenderId: "697390323520",
  appId: "1:697390323520:web:4aef629978e2f19585cca5",
  measurementId: "G-S5EJ4G7NM5"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const database = getDatabase(app);
const auth = getAuth(app); // Initialize auth

// Exporting Firebase services and functions for use in other parts of your app
export { app, database, auth, ref, set, get, remove, push };