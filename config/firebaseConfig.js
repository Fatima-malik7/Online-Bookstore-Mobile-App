// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


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
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
