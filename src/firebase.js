// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAK1NS70cN9h4tJ4AR1X9MIZ-RNmV-iEYg",
  authDomain: "cusatconnects.firebaseapp.com",
  projectId: "cusatconnects",
  storageBucket: "cusatconnects.appspot.com",
  messagingSenderId: "795651425972",
  appId: "1:795651425972:web:9fb1c5d8be374a260139e1",
  measurementId: "G-MLQ9XS1511"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage,provider };
export default firebase;