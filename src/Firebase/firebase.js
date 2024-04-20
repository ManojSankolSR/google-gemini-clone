// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjanDJSECfKa3F6eSFCanOBXsc2a0SZIc",
  authDomain: "geminiclone-68d48.firebaseapp.com",
  projectId: "geminiclone-68d48",
  storageBucket: "geminiclone-68d48.appspot.com",
  messagingSenderId: "971308260491",
  appId: "1:971308260491:web:527b4d9c097160c986488e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);

export {app,auth,firestore}