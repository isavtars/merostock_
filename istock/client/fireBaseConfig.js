// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcYxDjVhz4yBQmveY6ns_vIi899VLLLOs",
  authDomain: "merostock-4fce7.firebaseapp.com",
  projectId: "merostock-4fce7",
  storageBucket: "merostock-4fce7.appspot.com",
  messagingSenderId: "453934882142",
  appId: "1:453934882142:web:6b4484c3a6e9898d8443cf",
  measurementId: "G-RJ259TWFKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);