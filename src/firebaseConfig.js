// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5mnEhoRXck_0ABUKSR5zdwyxjgtShklc",
  authDomain: "edtech-assignment-7e8e3.firebaseapp.com",
  projectId: "edtech-assignment-7e8e3",
  storageBucket: "edtech-assignment-7e8e3.appspot.com",
  messagingSenderId: "86713492658",
  appId: "1:86713492658:web:e34d6a3c01ac39b98595ab",
  measurementId: "G-X1N114W23S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore  = getFirestore(app)

export {auth, app, firestore,analytics};