import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context";
import classes from "./AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../validationHooks/auth-hook";

const AuthForm = () => {
  const nameRegEx = /^[a-z][a-z0-9_]*$/;
  const emainRegEx = /^\w{10,}(\b@prominentpixel\.com\b)*$/;
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

  const {
    value: enteredNameInput,
    isValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChange,
    inputBlurHandler: nameInputBlur,
    reset: resetNameInput,
  } = useInput((value) => nameRegEx.test(value));

  const {
    value: enteredEmailInput,
    isValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChange,
    inputBlurHandler: emailInputBlur,
    reset: resetEmailInput,
  } = useInput((value) => emainRegEx.test(value));

  const {
    value: enteredPasswordInput,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordInputChange,
    inputBlurHandler: passwordInputBlur,
    reset: resetPasswordInput,
  } = useInput((value) => passwordRegEx.test(value));

  const {
    value: enteredCpasswordInput,
    isValid: isCpasswordValid,
    hasError: cPasswordHasError,
    inputChangeHandler: cpasswordInputChange,
    inputBlurHandler: cpasswordInputBlur,
    reset: resetcPasswordInput,
  } = useInput((value) => value === enteredPasswordInput);

  let formIsValid = false;

  const authCtx = useContext(UserContext);
  const history = useNavigate();

  const [selectVal, setSelectVal] = useState("Username/password");

  const selectChangeHandler = (event) => {
    console.log(event.target.value);
    setSelectVal(event.target.value);
  };
  if ((isNameValid || isEmailValid) && isPasswordValid && isCpasswordValid) {
    formIsValid = true;
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(selectVal === "Username/password"  && formIsValid) {
      const creds = {
        username : enteredNameInput,
        password : enteredPasswordInput
      }
      const login = authCtx.login(creds, selectVal);
      if(login) {
        history('/home');
        resetNameInput();
        resetEmailInput();
        resetPasswordInput();
        resetcPasswordInput();  
      }
    }
  };

  const inputElement =
    selectVal === "Username/password" ? (
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          value={enteredNameInput}
          onChange={nameInputChange}
          onBlur={nameInputBlur}
        />
      </div>
    ) : (
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={enteredEmailInput}
          onChange={emailInputChange}
          onBlur={emailInputBlur}
        />
      </div>
    );
  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <div className={classes.select}>
        <select onChange={selectChangeHandler}>
          <option>Username/password</option>
          <option>email</option>
        </select>
      </div>
      <form onSubmit={submitHandler} className={classes.form}>
        {inputElement}
        {nameHasError && selectVal === "Username/password" && (
          <p className="error-text">
            Name must not be empty and cant start with numbers.
          </p>
        )}
        {emailHasError && selectVal !== "Username/password" && (
          <p className="error-text">
            Please enter a valid email.(must contain at least 10 charator and
            end with @prominentpixel.com)
          </p>
        )}
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            id="password"
            required
            value={enteredPasswordInput}
            onChange={passwordInputChange}
            onBlur={passwordInputBlur}
          />
          {passwordHasError && (
            <p className="error-text">Password is envalid</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            required
            value={enteredCpasswordInput}
            onChange={cpasswordInputChange}
            onBlur={cpasswordInputBlur}
          />
          {cPasswordHasError && (
            <p className="error-text">
              Confirm Password is not the same as Password
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <Link to='/signup'>
            <button type="button" className={classes.toggle}>
              Have not any account?
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
