// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as dotenv from "dotenv";
dotenv.config();

const firebaseConfig = import.meta.env.FB_CONFIG;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
