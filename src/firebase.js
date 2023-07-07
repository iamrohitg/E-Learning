import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRTkFsuNUyGzuhRHNtqL0YhuZt3GNWqWQ",
  authDomain: "e-learning-website-eed90.firebaseapp.com",
  projectId: "e-learning-website-eed90",
  storageBucket: "e-learning-website-eed90.appspot.com",
  messagingSenderId: "240716286981",
  appId: "1:240716286981:web:6bbec1f2729e65ff9ce06c",
  measurementId: "G-V3GX86P1BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
