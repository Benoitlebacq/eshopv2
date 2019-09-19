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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
