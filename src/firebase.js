// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB_0AehHIUusUTeUto7hhfEMEY4HoV7oho",
  authDomain: "cusat-connects-jn.firebaseapp.com",
  databaseURL: "https://cusat-connects-jn-default-rtdb.firebaseio.com",
  projectId: "cusat-connects-jn",
  storageBucket: "cusat-connects-jn.appspot.com",
  messagingSenderId: "434949410119",
  appId: "1:434949410119:web:c85bf570a4d55e6bb3d062"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage,provider };
export default firebase;