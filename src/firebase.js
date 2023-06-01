import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDa154IT1NrJWM3ILVLf0REBg-52OXmXM",
  authDomain: "react-user-task-list.firebaseapp.com",
  projectId: "react-user-task-list",
  storageBucket: "react-user-task-list.appspot.com",
  messagingSenderId: "141777849115",
  appId: "1:141777849115:web:df8fdda4760b482d87e1be",
  measurementId: "G-994K9NTZ99"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
