// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQLg4lu9AxYWJflEVoRLZ67EVAox2sBGg",
  authDomain: "auth-integration-private-bde1c.firebaseapp.com",
  projectId: "auth-integration-private-bde1c",
  storageBucket: "auth-integration-private-bde1c.appspot.com",
  messagingSenderId: "403118665259",
  appId: "1:403118665259:web:12a08bed76dca6a651c46e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
