import { useState } from 'react';
import './sign-up-form.component.scss';
import { createAuthUserWithEmailAndPassword }from './../../utils/firebase/firebase.utils';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormField);
     const { displayName, email, password, confirmPassword } = formFields;

     const handleChange = (event) => {
         const { name, value } = event.target;
         setFormFields({...formFields, [name]: value});
     }
     const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);
     }
     console.log(formFields)
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Display Name</label>
                    <input onChange={handleChange} value={displayName} id="name" type="text" required name="displayName"/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={email} id="email" type="email" required name="email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={password} id="password" type="password" required name="password"/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Passowrd</label>
                    <input onChange={handleChange} value={confirmPassword} id="confirm-password" type="password" required name="confirmPassword"/>
                </div>                 
                <button type="submit">submit</button>
            </form>
        </div>
    );
}


export default SignUpFormComponent;