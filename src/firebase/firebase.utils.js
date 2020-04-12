import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyCUPIH0VEklGUgmKKuCwJVrVfPWmXfaPs8",
  authDomain: "sgi2-9b666.firebaseapp.com",
  databaseURL: "https://sgi2-9b666.firebaseio.com",
  projectId: "sgi2-9b666",
  storageBucket: "sgi2-9b666.appspot.com",
  messagingSenderId: "441816602410",
  appId: "1:441816602410:web:92cb6f353787068e46f053",
  measurementId: "G-2SWDCNDVB2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(userAuth)
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch(err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;