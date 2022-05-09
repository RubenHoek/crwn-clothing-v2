<<<<<<< HEAD
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
=======
import {  createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf

const SignIn = () => {
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopup();
<<<<<<< HEAD
        createUserDocumentFromAuth(user)
    }
=======
        const userDocRef = await createUserDocumentFromAuth(user);
    };
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
<<<<<<< HEAD
=======
            <SignUpForm/>
>>>>>>> 572762f9cdbc029a223501141b008c5701154dcf
        </div>
    )
}

export default SignIn;