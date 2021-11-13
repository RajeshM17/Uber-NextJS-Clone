// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxIr1fgUl_APO-ahD5gvKECDBwFH63EiI",
  authDomain: "uber-next-clone-cf379.firebaseapp.com",
  projectId: "uber-next-clone-cf379",
  storageBucket: "uber-next-clone-cf379.appspot.com",
  messagingSenderId: "435603431660",
  appId: "1:435603431660:web:1a5dd26311ea6a115905c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth=getAuth()
export {app,provider,auth};