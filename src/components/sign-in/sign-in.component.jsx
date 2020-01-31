import React from 'react';
import './sign-in.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle,auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })

        } catch (error) {
            console.log(error);
        }
    }
    handleChange = (e) =>{
        const{name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    render(){

        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
    
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="Email"
                    required
                    />
                    
                    <FormInput 
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label="Password"
                    required
                    />
                    <div className="button-group">

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                    onClick={signInWithGoogle} isGoogleSignIn
                    >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
