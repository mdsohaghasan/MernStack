// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6JC5i45WYVcUjHC7w1lKPnkvFzmHJaQc",
  authDomain: "rana-auth.firebaseapp.com",
  projectId: "rana-auth",
  storageBucket: "rana-auth.appspot.com",
  messagingSenderId: "376417782652",
  appId: "1:376417782652:web:3b49a13bc4d9955ee4f2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;