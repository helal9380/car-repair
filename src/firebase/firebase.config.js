// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB77qebiHfRlaGjzu0_pPHdUOTF70LrFOY",
  authDomain: "car-repair-47b6e.firebaseapp.com",
  projectId: "car-repair-47b6e",
  storageBucket: "car-repair-47b6e.appspot.com",
  messagingSenderId: "585431738720",
  appId: "1:585431738720:web:eaf4cd3f5a186d4e0d1605",
  measurementId: "G-GW50YHN9BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app