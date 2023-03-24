// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzbNjWvD5TUefYpYH2wJ29BQGRE-N5g4",
  authDomain: "react-journal-423de.firebaseapp.com",
  projectId: "react-journal-423de",
  storageBucket: "react-journal-423de.appspot.com",
  messagingSenderId: "1092185011960",
  appId: "1:1092185011960:web:d16502151aba28be366d0d",
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);

