import React from "react";
import "./signInAndOut.scss";
import SignIn from "../components/SignIn-component";
import Signup from "../components/Signup-component";

const SignInAndOut = () => {
  return (
    <div className="sing-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInAndOut;
