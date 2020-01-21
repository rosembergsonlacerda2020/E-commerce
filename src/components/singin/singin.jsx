import React, { Component } from 'react';
import SingInUp from '../../pages/singin/singinup';
import FormInput from '../form-input/formInput';
import CustomButton from '../button-sing/button-sing';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import './singin.scss';

class SingIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} required handleChange={this.handleChange}/>
                    <FormInput name="password" label="password" type="password" value={this.state.password} required handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit form">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingIn;
