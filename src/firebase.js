// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDDrxwpQd61fJEweR-N441U2sIN1lIKK6Y",
  authDomain: "mini-7daca.firebaseapp.com",
  projectId: "mini-7daca",
  storageBucket: "mini-7daca.appspot.com",
  messagingSenderId: "945719089677",
  appId: "1:945719089677:web:c266528ecbca62e8109344",
  measurementId: "G-YZGFSTDND7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage,provider };
export default firebase;