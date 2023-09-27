// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP4LQ_rWw6TG3RCbcdKcYdTb1Rv4uHuPQ",
  authDomain: "portfolio-fffba.firebaseapp.com",
  projectId: "portfolio-fffba",
  storageBucket: "portfolio-fffba.appspot.com",
  messagingSenderId: "637438110079",
  appId: "1:637438110079:web:cac87780b6596a1f32124a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
