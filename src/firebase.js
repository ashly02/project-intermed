// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBZuRdbsMHBt-WDJomle9Xkm38m_0A13lU",
  authDomain: "last-cuco.firebaseapp.com",
  projectId: "last-cuco",
  storageBucket: "last-cuco.appspot.com",
  messagingSenderId: "670566848845",
  appId: "1:670566848845:web:0e366751bde67232953f04"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage, provider };
export default firebase;