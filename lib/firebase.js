// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZL8NtuIqzOzC4l5uy-74HybVu30Yo3Fw",
  authDomain: "game-site2.firebaseapp.com",
  projectId: "game-site2",
  storageBucket: "game-site2.firebasestorage.app",
  messagingSenderId: "591120220989",
  appId: "1:591120220989:web:c9f7c13b12e1105b36bb54",
  measurementId: "G-MP6J1L1Y11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
