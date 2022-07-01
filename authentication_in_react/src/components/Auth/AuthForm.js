import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";
import AuthContext from "../store/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const authCtx = useContext(AuthContext)
  const history = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwrdRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwrdRef.current.value;
    
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEOcOpfz9doCV-rEF6MPAtRTZdx1QPJjE';
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEOcOpfz9doCV-rEF6MPAtRTZdx1QPJjE";
    }
    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          rtuenSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json()
      } else {
        const data = res.json();
        let errorMessage = "Authentication has Failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    }).then((data) => {
      console.log(data.expiresIn);
      authCtx.login(data.idToken,5000);
      history('/',{replace : true}) 
    })
    .catch(err => alert(err.message))
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwrdRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Loading..</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
