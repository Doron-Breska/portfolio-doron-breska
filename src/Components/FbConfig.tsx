// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const fbConfig = JSON.parse(import.meta.env.VITE_FB_CONFIG as string);

const firebaseConfig = fbConfig;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
