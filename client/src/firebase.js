// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9c44f.firebaseapp.com",
  projectId: "mern-estate-9c44f",
  storageBucket: "mern-estate-9c44f.appspot.com",
  messagingSenderId: "414359448225",
  appId: "1:414359448225:web:70e2b71369fd35adbe9ee0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);