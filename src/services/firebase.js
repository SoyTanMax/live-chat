// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "live-chat-f3a72.firebaseapp.com",
  projectId: "live-chat-f3a72",
  storageBucket: "live-chat-f3a72.appspot.com",
  messagingSenderId: "657414440288",
  appId: "1:657414440288:web:90e7486f0ef116efa84a05",
  measurementId: "G-GLVMPTY258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}