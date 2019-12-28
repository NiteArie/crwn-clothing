import React from 'react';

import './sign-in-and-sign-out.styles.scss';

import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    );
}

export default SignInAndSignUpPage;