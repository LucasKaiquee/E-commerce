// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeafAQ8Mi_JuieniyOYT5RzH7u_GgbPNo",
  authDomain: "ecommerce-eb9ac.firebaseapp.com",
  projectId: "ecommerce-eb9ac",
  storageBucket: "ecommerce-eb9ac.appspot.com",
  messagingSenderId: "677923830073",
  appId: "1:677923830073:web:f435ecb01082f659ff10e8",
  measurementId: "G-YYWR76WKJE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
