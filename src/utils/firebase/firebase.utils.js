import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCpDOHuehTXh0hHHTSgZH86eFzqRvwHADw",
    authDomain: "crwn-clothing-db-5f4f1.firebaseapp.com",
    projectId: "crwn-clothing-db-5f4f1",
    storageBucket: "crwn-clothing-db-5f4f1.appspot.com",
    messagingSenderId: "870522551236",
    appId: "1:870522551236:web:879e866ba5a3c6355fc291"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            // L.88@3:12
            console.log('error creating the user', error.message);
        }

    }
    return userDocRef;

}