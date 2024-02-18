// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { apiKey } from "./private";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "medflex-connect-58a1c.firebaseapp.com",
  projectId: "medflex-connect-58a1c",
  storageBucket: "medflex-connect-58a1c.appspot.com",
  messagingSenderId: "406054309035",
  appId: "1:406054309035:web:7c97b948cde9d7585f3bee",
  measurementId: "G-09WH0TWYL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database instance
const db = getFirestore(app);
export { db, app };