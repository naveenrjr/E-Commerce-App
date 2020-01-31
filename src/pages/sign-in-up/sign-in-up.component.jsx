import React from 'react';
import './sign-in-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up';


const SignInAndSignUp = () =>{
    return (
        <div className="sign-in-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}


export default SignInAndSignUp;