// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJD0cQxXotdR9zwTo9ZKUvnNE_-ZcUDNM",
  authDomain: "genius-car-services-1ec8d.firebaseapp.com",
  projectId: "genius-car-services-1ec8d",
  storageBucket: "genius-car-services-1ec8d.appspot.com",
  messagingSenderId: "712952216645",
  appId: "1:712952216645:web:3afb3344dcd6982e9e772c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
