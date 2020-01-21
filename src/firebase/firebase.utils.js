import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5t8fI5QcH0ZuXqd6zLnse3T9ragtwne8",
    authDomain: "crwn-db-628bb.firebaseapp.com",
    databaseURL: "https://crwn-db-628bb.firebaseio.com",
    projectId: "crwn-db-628bb",
    storageBucket: "crwn-db-628bb.appspot.com",
    messagingSenderId: "976417549853",
    appId: "1:976417549853:web:ed3ea49c7093a78276e0f4",
    measurementId: "G-NR42W3GNSB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()


    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;