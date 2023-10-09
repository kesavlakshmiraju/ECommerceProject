import React from "react";
import Signin from "../sign-in/Signin";
import Signup from "../sign-up/Signup";

const SignInAndSignUp = () => (
    <div className="lg:flex justify-center lg:space-x-32 md:space-x-10 pt-5 md:flex">
        <div>
        <Signin />
        </div>
        <div>
        <Signup />        
        </div>
    </div>
)

export default SignInAndSignUp;