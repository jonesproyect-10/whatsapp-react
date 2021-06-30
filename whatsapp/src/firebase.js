import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCpgVkZaWb787VJOxsUuSDjgbgqhwIcMWo",
  authDomain: "appwhats-e848f.firebaseapp.com",
  projectId: "appwhats-e848f",
  storageBucket: "appwhats-e848f.appspot.com",
  messagingSenderId: "1000771311266",
  appId: "1:1000771311266:web:5c1a7aacb950bfaa9229fb",
  measurementId: "G-YSCCLSF1R7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export{auth,provider};
export default db;