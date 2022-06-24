import './sign-in-form.component.scss';
import FormInputComponent from './../form-input/form-input.component';
import ButtonComponent from './../button/button.component';
import { useState } from 'react';
import { signInUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from './../../utils/firebase/firebase.utils';

const defaultFormField = {
    email: '',
    password: ''
}

const SignInFormComponent = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormField);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            resetFormField();
            console.log(user);

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                case 'auth/user-not-found':
                    alert('incorrect email or password');
                    break;
                default: 
                    console.log(error);

            }
        }
    }
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
  };
    return (
        <div className="sign-in-container">
            <h2>Have an account</h2>
            <span>Sign In with your email and password</span>
            <form className="form" onSubmit={handleSubmit}>
            <FormInputComponent
                label={'Email'}
                id={'sign-in-email'}
                value={email}
                type={'email'}
                required={true}
                name={'email'}
                handleChange={handleChange}
            />
            <FormInputComponent
                label={'Password'}
                id={'sign-in-password'}
                value={password}
                type={'password'}
                required={true}
                name={'password'}
                handleChange={handleChange}
            />
            <div className="buttons-container">
            <ButtonComponent type={'submit'}>
                Submit
            </ButtonComponent>
            <ButtonComponent onClick={logGoogleUser} type={'button'} buttonType={'google'}>
                Google Sign in
            </ButtonComponent>
            </div>
            </form>
            
        </div>
    );
}
export default SignInFormComponent;