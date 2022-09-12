import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsSDBqqBDzk_sHZ2aKN50YdXWEk73m6xk",
  authDomain: "pokedex-acd69.firebaseapp.com",
  projectId: "pokedex-acd69",
  storageBucket: "pokedex-acd69.appspot.com",
  messagingSenderId: "424648496300",
  appId: "1:424648496300:web:a80a464e9f944133ccfb09",
  measurementId: "G-ZX5EGTC9JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password) => {//espera a que se haga login 
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return console.error(err);
  }
};
export { 
  auth,
  loginWithEmailAndPassword 
};