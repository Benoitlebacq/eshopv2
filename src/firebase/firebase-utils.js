import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCf8zMKxCPsRu-j1oOqnR2VmYdI-mqNTZo",
  authDomain: "eshopproject-9ffc6.firebaseapp.com",
  databaseURL: "https://eshopproject-9ffc6.firebaseio.com",
  projectId: "eshopproject-9ffc6",
  storageBucket: "",
  messagingSenderId: "168851956589",
  appId: "1:168851956589:web:74ea2e0e9ebaf150"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
