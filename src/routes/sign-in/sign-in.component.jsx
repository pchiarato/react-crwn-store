import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../assets/utils/firebase/firebase.utils";

export const SignInComponent = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        console.log(user);
    }
    return (
        <div>
        <h1>Sign In Component</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
    )
}
    
