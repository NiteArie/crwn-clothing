import React from 'react';

import './sign-in-and-sign-out.styles.scss';

import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {
    SignInAndSignUpContainer
} from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <Signin />
            <SignUp />
        </SignInAndSignUpContainer>
    );
}

export default SignInAndSignUpPage;