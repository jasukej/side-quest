// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "side-quest-1b06d.firebaseapp.com",
  projectId: "side-quest-1b06d",
  storageBucket: "side-quest-1b06d.firebasestorage.app",
  messagingSenderId: "610111175239",
  appId: "1:610111175239:web:3dce21e74c741010164f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 