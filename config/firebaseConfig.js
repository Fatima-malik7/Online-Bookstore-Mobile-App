// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


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



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize auth

export { db, auth }; // Export auth along with db