import firebase from "firebase/compat";
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1R8ekQvW0IHRKg4oqb5G6WeUmKuMV-Kg",
  authDomain: "troll-ffa08.firebaseapp.com",
  projectId: "troll-ffa08",
  storageBucket: "troll-ffa08.appspot.com",
  messagingSenderId: "119706072761",
  appId: "1:119706072761:web:f8d8b37f05cf1105584d68",
  measurementId: "G-CCZGK1EPJP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
