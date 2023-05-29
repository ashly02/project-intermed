// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDoWdOBJjYoejNoTNHqHdEgFFcDqC8tirc",
  authDomain: "cusat-jn.firebaseapp.com",
  projectId: "cusat-jn",
  storageBucket: "cusat-jn.appspot.com",
  messagingSenderId: "31443014638",
  appId: "1:31443014638:web:d09f3b1997160f26f674ff"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage,provider };
export default firebase;