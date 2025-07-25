// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzR6i5l9-rH1ntPjrLO4uZnF47RAsVl6U",
  authDomain: "futbol-d0737.firebaseapp.com",
  projectId: "futbol-d0737",
  storageBucket: "futbol-d0737.firebasestorage.app",
  messagingSenderId: "900644871114",
  appId: "1:900644871114:web:873870ae07930bca890d33",
  measurementId: "G-8D18ZT1PME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);