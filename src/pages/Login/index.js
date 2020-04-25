import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";

const Login = () => {
  const [ signIn, setSignIn ] = useState(true);

  return (
    <main className="main-login">
      <Link to={'/'}>
        <RadioButton/>
      </Link>

      <div className="sign-form">
        <div className="sign">
          <div
            className={`sign-in ${signIn ? 'active' : ''}`}
            onClick={() => {
              setSignIn(true)
            }}
          >
            Sign In
          </div>
          <div
            className={`sign-up  ${signIn ? '' : 'active'}`}
            onClick={() => {
              setSignIn(false)
            }}
          >
            Sign Up
          </div>
        </div>
        <form className="signUp-form sign-show">
          {
            signIn && (
              <input name="name-input" className="signUp-input" type="text" placeholder="Your name..."/>
            )
          }
          <input name="email-input" className="signUp-input" type="text" placeholder="Your email..."/>
          <input name="password-input" className="signUp-input" type="text" placeholder="Your password..."/>
          <div className="center pdtop-20">
            <button name="signUp-button" type="submit" className="sign-button">
              <span className="sign-button-content">{signIn ? 'Sign in' : 'Sign up'}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
};

export default Login;