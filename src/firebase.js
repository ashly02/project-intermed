// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAK1NS70cN9h4tJ4AR1X9MIZ-RNmV-iEYg",
  authDomain: "cusatconnects.firebaseapp.com",
  projectId: "cusatconnects",
  storageBucket: "cusatconnects.appspot.com",
  messagingSenderId: "795651425972",
  appId: "1:795651425972:web:9fb1c5d8be374a260139e1",
  measurementId: "G-MLQ9XS1511"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };