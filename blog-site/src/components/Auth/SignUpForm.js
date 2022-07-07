import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import classes from "./AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../validationHooks/auth-hook";

const SignUpForm = () => {
  const nameRegEx = /^[a-z][a-z0-9_]*$/;
  const emainRegEx = /^\w{10,}(\b@prominentpixel\.com\b)*$/;
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
  const fullNameRegEx = /^(?=.*[a-z])|(?=.*[A-Z])/;
  
  const {
    value: enteredFullNameInput,
    isValid: isFullNameValid,
    hasError: fullNameHasError,
    inputChangeHandler: fullNameInputChange,
    inputBlurHandler: fullNameInputBlur,
    reset: resetFullNameInput,
  } = useInput((value) => fullNameRegEx.test(value));

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
  const history = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault();
    
    if(formIsValid) {
        const formData = {
            username : enteredNameInput,
            email : enteredEmailInput,
            password : enteredPasswordInput
        }
        authCtx.signup(formData);
        history('/login')
        resetFullNameInput();
        resetNameInput();
        resetEmailInput();
        resetPasswordInput();
        resetcPasswordInput();    
    }
  };

  if (isNameValid && isFullNameValid && isEmailValid && isPasswordValid && isCpasswordValid) {
    formIsValid = true;
  }
  
  return (
    <section className={classes.auth}>
      <h1>Sign-Up</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="password">Full-Name</label>
          <input
            type="text"
            id="fullname"
            required
            value={enteredFullNameInput}
            onChange={fullNameInputChange}
            onBlur={fullNameInputBlur}
          />
          {fullNameHasError && (
            <p className="error-text">
              Full name should only contain alphabets
            </p>
          )}
        </div>
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
      {emailHasError && (
        <p className="error-text">
          Please enter a valid email.(must contain at least 10 charator and
          end with @prominentpixel.com)
        </p>
      )}
      <div className={classes.control}>
        <label htmlFor="email">Desired Username</label>
        <input
          type="text"
          id="username"
          required
          value={enteredNameInput}
          onChange={nameInputChange}
          onBlur={nameInputBlur}
        />
      </div>
        {nameHasError && (
          <p className="error-text">
            Username must not be empty and cant start with numbers.
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
          <button>Sign-Up</button>
          <Link to='/login'>
            <button type="button" className={classes.toggle}>
            Already have account?
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
