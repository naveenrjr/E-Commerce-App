import React, { Component } from 'react'
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';

 class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmPassword:'',
        }
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit=async (e) =>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password dont match");
            return;

        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user,{displayName});

            this.setState({
             displayName:'',
             email:'',
             password:'',
             confirmPassword:'',
            })
        } catch (error) {
            
        }

    }
    render() {

        const {displayName,email,password,confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h1>I do not have an account</h1>
                <span>Sign Up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        handleChange={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required
                    
                    />
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    
                    />
                    <CustomButton
                    type="submit"
                    >Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
