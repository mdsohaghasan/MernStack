// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyAJK5vSEjC0CxUEZ9RRTK3SPo5G-JLxRGQ",
  authDomain: "warehouse-67541.firebaseapp.com",
  projectId: "warehouse-67541",
  storageBucket: "warehouse-67541.appspot.com",
  messagingSenderId: "270314049492",
  appId: "1:270314049492:web:28b428bad2d446e7eb5041"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


