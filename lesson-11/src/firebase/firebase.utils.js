import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1UFM3e6itRV4fCnYaMdLp4770t6Cv7_M",
    authDomain: "crwn-db-c97d2.firebaseapp.com",
    databaseURL: "https://crwn-db-c97d2.firebaseio.com",
    projectId: "crwn-db-c97d2",
    storageBucket: "crwn-db-c97d2.appspot.com",
    messagingSenderId: "433209243861",
    appId: "1:433209243861:web:935764f6318a0fc5a70a5c",
    measurementId: "G-LKWS1N36RZ"
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
