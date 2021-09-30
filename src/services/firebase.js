// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIZeJe_MC5d8bq5VvhSOaG8bzTipC9dnM",
  authDomain: "dojo-blog-6b410.firebaseapp.com",
  projectId: "dojo-blog-6b410",
  storageBucket: "dojo-blog-6b410.appspot.com",
  messagingSenderId: "831020584395",
  appId: "1:831020584395:web:e14c90ee120de817e17a4e",
  measurementId: "G-YGEE52E0JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}