import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-9h19sTbV4SWYRnybTdPu4Np5eUfLgSU",
  authDomain: "roman-zupa.firebaseapp.com",
  projectId: "roman-zupa",
  storageBucket: "roman-zupa.firebasestorage.app",
  messagingSenderId: "170599009120",
  appId: "1:170599009120:web:1af1c128e02a8aa6a0ec05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
