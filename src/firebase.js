// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0FnS8pragoaznht-MGsQpdA42toGJmdU",
  authDomain: "precision-kinetica.firebaseapp.com",
  projectId: "precision-kinetica",
  storageBucket: "precision-kinetica.firebasestorage.app",
  messagingSenderId: "74657662090",
  appId: "1:74657662090:web:0d86f1e6dc8695f8aa5973",
  measurementId: "G-MXJRJ6DMVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export const auth = getFirestore(app);