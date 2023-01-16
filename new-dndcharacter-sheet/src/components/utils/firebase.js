import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-fQFZlyHpabPS5eunHPF4Zq_kncJNPbc",
  authDomain: "new-dnd-character-sheet.firebaseapp.com",
  projectId: "new-dnd-character-sheet",
  storageBucket: "new-dnd-character-sheet.appspot.com",
  messagingSenderId: "312721295161",
  appId: "1:312721295161:web:b4f7ef5f606fa49d690ae8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

export default firebase;
