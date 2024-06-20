// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqA6UgHxsLmZvQuOuweyDRztHjT6nBu90",
  authDomain: "clone-875f3.firebaseapp.com",
  projectId: "clone-875f3",
  storageBucket: "clone-875f3.appspot.com",
  messagingSenderId: "830111011177",
  appId: "1:830111011177:web:177e109d23938b23b8edf8",
  measurementId: "G-B34WRJPCFW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
// export const googleProvider = new firebase.auth.GoogleAuthProvider()