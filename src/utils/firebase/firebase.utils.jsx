import { initializeApp } from 'firebase/app';
<<<<<<< HEAD
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
=======
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi7JBsc5TnRErW2JmKtOaYDpX3BVqLl0g",
    authDomain: "crwn-clothing-db-dce0d.firebaseapp.com",
    projectId: "crwn-clothing-db-dce0d",
    storageBucket: "crwn-clothing-db-dce0d.appspot.com",
    messagingSenderId: "248307754502",
    appId: "1:248307754502:web:52a08ec48b74709713c587"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

<<<<<<< HEAD
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
=======
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf
    prompt: "select_account"
});

export const auth = getAuth();
<<<<<<< HEAD
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log('createUserDocumentFromAuth 2.0');
    console.log(userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);
=======
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.user.uid);
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
<<<<<<< HEAD
=======

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth.user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (e) {
            console.log('error creating the user', e.message);
        }
    }

    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf
}