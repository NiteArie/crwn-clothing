import React from 'react';

import './sign-in-and-sign-out.styles.scss';

import Signin from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
        </div>
    );
}

export default SignInAndSignUpPage;