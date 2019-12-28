import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDbkXZpcWU_CcejORyz_J2OS0kJB4ohwUI",
    authDomain: "crwn-db-7a546.firebaseapp.com",
    databaseURL: "https://crwn-db-7a546.firebaseio.com",
    projectId: "crwn-db-7a546",
    storageBucket: "crwn-db-7a546.appspot.com",
    messagingSenderId: "239632133944",
    appId: "1:239632133944:web:dfb8dea23220bed7a5dbcd",
    measurementId: "G-5F7S4TWV3H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
