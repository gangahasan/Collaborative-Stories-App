// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZW9kq_ct59yOG1ximJ7QCWA5s738xcHU",
  authDomain: "collaborative-story-crea-a0350.firebaseapp.com",
  projectId: "collaborative-story-crea-a0350",
  storageBucket: "collaborative-story-crea-a0350.firebasestorage.app",
  messagingSenderId: "281211958596",
  appId: "1:281211958596:web:e7b42aa4927648271f9311",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);