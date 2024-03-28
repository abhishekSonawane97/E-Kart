import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALIQkJf1RAxD64FCJ55iI6fuolWKWp2hw",
  authDomain: "e-kart-34f35.firebaseapp.com",
  projectId: "e-kart-34f35",
  storageBucket: "e-kart-34f35.appspot.com",
  messagingSenderId: "967765335080",
  appId: "1:967765335080:web:a29001eb0585d915b9691d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
