import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3KCRwEYskL4iCdMEUuz_6laHEkJJKQyU",
  authDomain: "stitchnetwork-70ee5.firebaseapp.com",
  projectId: "stitchnetwork-70ee5",
  storageBucket: "stitchnetwork-70ee5.appspot.com",
  messagingSenderId: "651725750647",
  appId: "1:651725750647:web:3b8020f58b7edec6eb6172"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export  {app , auth , googleProvider , fireDB};