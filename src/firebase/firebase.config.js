// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHUGk-qQMg6_oIZTSoj6nBNQna94E8KyE",
  authDomain: "mega-mart-ab0e8.firebaseapp.com",
  projectId: "mega-mart-ab0e8",
  storageBucket: "mega-mart-ab0e8.appspot.com",
  messagingSenderId: "145659952709",
  appId: "1:145659952709:web:acc3f5172735f61b11ad2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth