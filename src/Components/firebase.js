import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA13F_447H3gc-UaZEGySVu2G2bJVSoG1I",
  authDomain: "profile-ef8eb.firebaseapp.com",
  projectId: "profile-ef8eb",
  storageBucket: "profile-ef8eb.appspot.com",
  messagingSenderId: "97070536597",
  appId: "1:97070536597:web:8bb6af02502d181a66489c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);