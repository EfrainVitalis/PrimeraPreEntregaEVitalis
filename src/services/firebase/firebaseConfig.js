import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjjQZVeWTv-kqnNt7TR7nk91paTcYdX7E",
  authDomain: "miecommerceevitalisreact.firebaseapp.com",
  projectId: "miecommerceevitalisreact",
  storageBucket: "miecommerceevitalisreact.appspot.com",
  messagingSenderId: "315480374946",
  appId: "1:315480374946:web:d77ef3b929c16cbd0c61fb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
