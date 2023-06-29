// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from 'firebase/auth' 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFdEDLHx9w2ZHhvcJpDqXX0zlnOyFtdJ4",
  authDomain: "blogproject-87bd8.firebaseapp.com",
  projectId: "blogproject-87bd8",
  storageBucket: "blogproject-87bd8.appspot.com",
  messagingSenderId: "475389090363",
  appId: "1:475389090363:web:71293e21bb432dfaf1da1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();