// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALuqmL565g-oo4HybBH2Tm-dHGGBwZ08",
  authDomain: "swiggy-clone-a606d.firebaseapp.com",
  projectId: "swiggy-clone-a606d",
  storageBucket: "swiggy-clone-a606d.appspot.com",
  messagingSenderId: "580195638098",
  appId: "1:580195638098:web:48df8870b00aa5dac2f88b",
  measurementId: "G-91HBNN586F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);