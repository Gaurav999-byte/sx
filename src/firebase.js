import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeJHwQ_k7FlJWwI-DjMPOgNKEwkgXbC40",
  authDomain: "soundxpand-f57d6.firebaseapp.com",
  projectId: "soundxpand-f57d6",
  storageBucket: "soundxpand-f57d6.firebasestorage.app",
  messagingSenderId: "990116245771",
  appId: "1:990116245771:web:979a2c28b3d4517d90f20e",
  measurementId: "G-JMTF31YMNP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
