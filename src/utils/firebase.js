// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1tBPRFAlqKAcoJ_eWol0k3T4djc0R8dQ",
  authDomain: "netflixgpt-e65df.firebaseapp.com",
  projectId: "netflixgpt-e65df",
  storageBucket: "netflixgpt-e65df.firebasestorage.app",
  messagingSenderId: "69339426501",
  appId: "1:69339426501:web:f2eeedb42bf68ebfa54aac",
  measurementId: "G-89RQDXNCV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);