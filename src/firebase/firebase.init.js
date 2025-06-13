// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrlIQv_Em6CCLOPAtHiZBGnFfIuB_YxZM",
  authDomain: "coffee-store-65818.firebaseapp.com",
  projectId: "coffee-store-65818",
  storageBucket: "coffee-store-65818.firebasestorage.app",
  messagingSenderId: "330868330684",
  appId: "1:330868330684:web:5b63202eb06e1633edc0b9",
  measurementId: "G-4VCKNL555F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth(app);