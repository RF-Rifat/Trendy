// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt89tJ0-3oWy76PXQz1eaRT4X5aD249tk",
  authDomain: "trendy-ec732.firebaseapp.com",
  projectId: "trendy-ec732",
  storageBucket: "trendy-ec732.appspot.com",
  messagingSenderId: "579423246510",
  appId: "1:579423246510:web:986c3d4a2f33e0a2d2753f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth