import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB9dMwcOLNEh4r_3i5aYkP4oC9sFnxOcbA",
    authDomain: "crown-db-46bd8.firebaseapp.com",
    projectId: "crown-db-46bd8",
    storageBucket: "crown-db-46bd8.appspot.com",
    messagingSenderId: "982277250013",
    appId: "1:982277250013:web:a974a05fda30e944b93434",
    measurementId: "G-Y3MYVRGRFQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'  // Always trigger the google popup when using google auth
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
