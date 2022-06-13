// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    // signInWithGoogleRedirect,
    // auth
    } from "./../../utils/firebase/firebase.utils";
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
    }
    return (
        <div>
        <h1>Sign In Component</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
    </div>
    )
}

export default SignInComponent
    
