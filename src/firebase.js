// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKbyqhfYjHjZa6WEKo8mJxxMwRlliAYkI",
  authDomain: "cusatconnects-fc49e.firebaseapp.com",
  projectId: "cusatconnects-fc49e",
  storageBucket: "cusatconnects-fc49e.appspot.com",
  messagingSenderId: "290629752566",
  appId: "1:290629752566:web:a3c077244dff40355e3ed7",
  measurementId: "G-JL4FB139JV"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, storage, provider };
export default firebase;
