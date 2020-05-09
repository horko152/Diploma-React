import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";
import { signInRequest } from "../../services/Login/api";
import { useHistory } from "react-router-dom";

const Login = ({isLogged, setLogged}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ signIn, setSignIn ] = useState(true);
  const history = useHistory();
  useEffect(()=>{
    if(isLogged){
    history.push("");
    }
  },[]);
  const loginFun = (e) => {
    e.preventDefault();
    signInRequest({
      username,
      password
    }).then((res) => {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', `Bearer ${res}`);
      history.push("/profile");
      setLogged(true);
      
    })
      .catch((res) => console.log(res))
  }
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
            !signIn && (
              <input name="name-input" className="signUp-input" type="text" placeholder="Your email..." value = {email} onChange ={(e)=>setEmail(e.target.value)}/>
            )
          }
          <input name="email-input" className="signUp-input" type="text" placeholder="Your username..." value = {username} onChange ={(e)=>setUserName(e.target.value)}/>
          <input name="password-input" className="signUp-input" type="text" placeholder="Your password..." value = {password} onChange ={(e)=>setPassword(e.target.value)}/>
          <div className="center pdtop-20">
            <button
              name="signUp-button"
              type="submit"
              className="sign-button"
              onClick={(e) => {
                loginFun(e)
              }}
            >
              <span className="sign-button-content">{signIn ? 'Sign in' : 'Sign up'}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
};

export default Login;