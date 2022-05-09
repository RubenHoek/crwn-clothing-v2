import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log('createUserDocumentFromAuth 2.0');
    console.log(userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
}