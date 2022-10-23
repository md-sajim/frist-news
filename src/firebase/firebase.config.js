// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwPbFpr1h6pU0QOepmAZaaYIFG4L9m4ek",
  authDomain: "first-news-today.firebaseapp.com",
  projectId: "first-news-today",
  storageBucket: "first-news-today.appspot.com",
  messagingSenderId: "517027141339",
  appId: "1:517027141339:web:6a2022771d9790612a9efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;