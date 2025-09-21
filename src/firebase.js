import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy0QWjIykPKh_6RsGQL20TU62wDU8eywY",
  authDomain: "newsapp-7a865.firebaseapp.com",
  projectId: "newsapp-7a865",
  storageBucket: "newsapp-7a865.firebasestorage.app",
  messagingSenderId: "483570084987",
  appId: "1:483570084987:web:d81560ade7f96387bb86de",
  measurementId: "G-SCHKV4KPQE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
