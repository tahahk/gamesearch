import React, { Component } from 'react';
import Signin from './signin'
import Signup from './signup'
class SigninSignup extends Component {
   render(){
    return(
        <div>
            <h1>Sign In</h1>
            <Signin/>
            <hr />
            <h1>Sign Up</h1>
            <Signup/>
        </div>
    )
   }
}
export default SigninSignup
