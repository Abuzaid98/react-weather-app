// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw4VeuwDBSO4lCVEDPNJ8RLM4hc7O9OeE",
  authDomain: "first-auth-39123.firebaseapp.com",
  databaseURL: "https://first-auth-39123-default-rtdb.firebaseio.com",
  projectId: "first-auth-39123",
  storageBucket: "first-auth-39123.appspot.com",
  messagingSenderId: "540849344684",
  appId: "1:540849344684:web:55ab9ba3ec3bf1a5eb4f09",
  measurementId: "G-MT335KHYBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;