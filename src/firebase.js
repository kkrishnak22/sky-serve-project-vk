import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR6MC4n36dgdz-29__YS-zPp0KmHQ8lNQ",
  authDomain: "sky-serve-project-vk.firebaseapp.com",
  projectId: "sky-serve-project-vk",
  storageBucket: "sky-serve-project-vk.firebasestorage.app",
  messagingSenderId: "123601605885",
  appId: "1:123601605885:web:84e64d95dcdaf6ebb4da94",
  measurementId: "G-WQ0S4E2ZP8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
