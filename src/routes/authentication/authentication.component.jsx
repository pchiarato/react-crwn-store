// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
  // signInWithGoogleRedirect,
  // auth
} from "../../utils/firebase/firebase.utils";

import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SignInFormComponent from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.component.scss";
const AuthenticationComponent = () => {
  // useEffect(() => {
  //     (async () => {
  //         const response = await getRedirectResult(auth);
  //         console.log(response);
  //     })();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInFormComponent />
      <SignUpFormComponent />
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
    </div>
  );
};

export default AuthenticationComponent;
