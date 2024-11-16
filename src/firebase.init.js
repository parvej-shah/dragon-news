// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjwTgXYg4tTLhvi4AngdlLdYJbTpEPyM8",
  authDomain: "simple-firebase-fa994.firebaseapp.com",
  projectId: "simple-firebase-fa994",
  storageBucket: "simple-firebase-fa994.firebasestorage.app",
  messagingSenderId: "215433591452",
  appId: "1:215433591452:web:22ce8dfeeaa84916afcb59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
