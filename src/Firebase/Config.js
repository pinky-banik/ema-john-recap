import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2QP4dLIJmEuKfTNuMbA5rLylVcn5xcgE",
  authDomain: "ema-john-pinky.firebaseapp.com",
  projectId: "ema-john-pinky",
  storageBucket: "ema-john-pinky.appspot.com",
  messagingSenderId: "856695211561",
  appId: "1:856695211561:web:7713b43531799bb2433e38",
  measurementId: "G-0E319D51KV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
