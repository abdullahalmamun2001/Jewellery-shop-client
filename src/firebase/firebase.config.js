// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWoLC-jSXMQNaAB_PgngKQptKVh8omem8",
  authDomain: "jewellery-shop-e2a9d.firebaseapp.com",
  projectId: "jewellery-shop-e2a9d",
  storageBucket: "jewellery-shop-e2a9d.appspot.com",
  messagingSenderId: "616058072951",
  appId: "1:616058072951:web:d75d512499c67f06c6fb72",
  measurementId: "G-L0FZ1ZS7R0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);