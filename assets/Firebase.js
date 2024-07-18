// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN1npWc9pwyx0HDRIaIPvQN0koP2ADrIU",
  authDomain: "bikekingdom-62682.firebaseapp.com",
  projectId: "bikekingdom-62682",
  storageBucket: "bikekingdom-62682.appspot.com",
  messagingSenderId: "49713741659",
  appId: "1:49713741659:web:08fc1e0d7d0ef8ca02247e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)