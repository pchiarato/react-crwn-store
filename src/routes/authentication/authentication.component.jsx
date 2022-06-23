// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  // auth
} from "../../utils/firebase/firebase.utils";

import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import ButtonComponent from "../../components/button/button.component";
const AuthenticationComponent = () => {
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
  };
  return (
    <div>
      <ButtonComponent onClick={logGoogleUser} type={'submit'} buttonType={'google'}>
          Sign in with Google Account
      </ButtonComponent>
      <SignUpFormComponent />
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
    </div>
  );
};

export default AuthenticationComponent;
