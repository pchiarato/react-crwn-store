// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    // signInWithGoogleRedirect,
    // auth
    } from "./../../utils/firebase/firebase.utils";

import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
const SignInComponent = () => {
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //     })();
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    return (
        <div>
        <SignUpFormComponent />
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
    </div>
    )
}

export default SignInComponent
    
