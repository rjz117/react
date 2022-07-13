import React, { useContext } from "react";
import { userContext } from "../../context/user-context";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";
import useInput from "../validationHooks/useInput";
import { useTranslation } from "react-i18next";
import { login } from "../../services/Auth";
import Cookies from "js-cookie";

const AuthForm = () => {
  const authCtx = useContext(userContext);
  const history = useNavigate();
  const { t } = useTranslation();

  

  const {
    value: enteredNameInput,
    isValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChange,
    inputBlurHandler: nameInputBlur,
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: enteredPasswordInput,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordInputChange,
    inputBlurHandler: passwordInputBlur,
  } = useInput((value: string) => value.trim() !== "");

  let formIsValid = false;

  if (isNameValid && isPasswordValid) {
    formIsValid = true;
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid) {
      const creds = {
        username: enteredNameInput,
        password: enteredPasswordInput,
      };
      const data = await login(creds);
      if (data.status === "success") {
        authCtx.login(data.role);
        Cookies.set('auth',data.accessToken)
        localStorage.setItem("auth", JSON.stringify(data.accessToken));
        alert("login successfull.");
        history("/home");
      }
    }
  };

  const inputElement = (
    <div className={classes.control}>
      <label htmlFor="username">{t("username")}</label>
      <input
        type="text"
        id="username"
        required
        value={enteredNameInput}
        onChange={nameInputChange}
        onBlur={nameInputBlur}
      />
    </div>
  );

  return (
    <section className={classes.auth}>
      <h1>{t("login")}</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        {inputElement}
        {nameHasError && (
          <p className="error-text">{t("Name_must_not_be_empty")}</p>
        )}
        <div className={classes.control}>
          <label htmlFor="password">{t("password")}</label>
          <input
            id="password"
            required
            value={enteredPasswordInput}
            onChange={passwordInputChange}
            onBlur={passwordInputBlur}
          />
          {passwordHasError && (
            <p className="error-text">{t("Password_is_envalid")}</p>
          )}
        </div>
        <div className={classes.actions}>
          <button>{t("login")}</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
