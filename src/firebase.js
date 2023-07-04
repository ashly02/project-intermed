// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCGGCdme3vRkDjgBP81DJS4Kr8lXDYLr_w",
  authDomain: "ipname-b28da.firebaseapp.com",
  projectId: "ipname-b28da",
  storageBucket: "ipname-b28da.appspot.com",
  messagingSenderId: "885011538622",
  appId: "1:885011538622:web:3f6cfd9de456cbf363b4ef"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage,provider };
export default firebase;