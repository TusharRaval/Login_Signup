// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGTOLrJl0bVpzoRv2SG5gQi-WgANsQDg",
  authDomain: "register2025-13d0a.firebaseapp.com",
  projectId: "register2025-13d0a",
  storageBucket: "register2025-13d0a.firebasestorage.app",
  messagingSenderId: "970094972157",
  appId: "1:970094972157:web:b942c402e4a9f0e2054294",
  measurementId: "G-9PEJMQHYP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);