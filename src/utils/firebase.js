// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjJ2qfXViEJ0iTtj20VR9JSAONlsJMjjA",
  authDomain: "netflixgpt-1211.firebaseapp.com",
  projectId: "netflixgpt-1211",
  storageBucket: "netflixgpt-1211.appspot.com",
  messagingSenderId: "103256490874",
  appId: "1:103256490874:web:1e8b35ed4509dd858b4cc3",
  measurementId: "G-E8ZZ3H34KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();