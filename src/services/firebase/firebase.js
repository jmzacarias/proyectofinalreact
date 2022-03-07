import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {

  apiKey: "AIzaSyAFN9BzaNNM9QTyNNcYhgs3lF3Ir7GGqFQ",
 authDomain: "proyecto1-b0c35.firebaseapp.com",
  projectId: "proyecto1-b0c35",
  storageBucket: "proyecto1-b0c35.appspot.com",
  messagingSenderId: "188541215325",
  appId: "1:188541215325:web:2cdf1d6bf74a3923a523b4"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

