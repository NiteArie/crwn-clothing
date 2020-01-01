import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './sign-in.styles';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                        value={this.state.email} handleChange={this.handleChange} required 
                        label="email"/>
                    <FormInput name="password" type="password" 
                        value={this.state.password} handleChange={this.handleChange} required 
                        label="password"/>

                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default Signin;