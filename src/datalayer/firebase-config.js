import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY-XZCBp4M9GRE9bCO4mj0V0vYMF9qaAE",
  authDomain: "disney--plus--clone.firebaseapp.com",
  projectId: "disney--plus--clone",
  storageBucket: "disney--plus--clone.appspot.com",
  messagingSenderId: "774845285939",
  appId: "1:774845285939:web:d9e3c6fa53499d14778546",
  measurementId: "G-WFQNDD22HY",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore();
// const colRef = collection(db, )

export const auth = getAuth(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export default colRef;
