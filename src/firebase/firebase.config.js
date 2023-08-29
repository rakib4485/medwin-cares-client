// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIlhArTCT7wPZWFdvxdC9YZAS0lpSL-o",
  authDomain: "medwin-cares-d026b.firebaseapp.com",
  projectId: "medwin-cares-d026b",
  storageBucket: "medwin-cares-d026b.appspot.com",
  messagingSenderId: "1051363013392",
  appId: "1:1051363013392:web:9b277cb66d7d1786a8eb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;