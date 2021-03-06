import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "./../../utils/firebase/firebase.utils";
import FormInputComponent from "./../form-input/form-input.component";
import ButtonComponent from "./../button/button.component";

import "./sign-up-form.component.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user creation encoutered an error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="form" onSubmit={handleSubmit}>
        <FormInputComponent
          label={"Display Name"}
          id={"name"}
          value={displayName}
          type={"text"}
          required={true}
          name={"displayName"}
          handleChange={handleChange}
        />
        <FormInputComponent
        label={'Email'}
        id={'email'}
        value={email}
        type={'email'}
        required={true}
        name={'email'}
        handleChange={handleChange}
        />
        <FormInputComponent
        label={'Password'}
        id={'password'}
        value={password}
        type={'password'}
        required={true}
        name={'password'}
        handleChange={handleChange}
        />
        <FormInputComponent
        label={'Confirm Password'}
        id={'confirm-password'}
        value={confirmPassword}
        type={'password'}
        required={true}
        name={'confirmPassword'}
        handleChange={handleChange}
        />
        <ButtonComponent type={'submit'}>
          Submit
        </ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpFormComponent;
