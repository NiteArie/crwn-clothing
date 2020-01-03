import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './sign-in.styles';

const Signin = () => {

    const [userCredentials, setCredentials] = useState({ email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
        }
        
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value,
        })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" 
                    value={email} handleChange={handleChange} required 
                    label="email"/>
                <FormInput name="password" type="password" 
                    value={password} handleChange={handleChange} required 
                    label="password"/>

                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default Signin;