import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../store/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const history = useNavigate();
  const newPasswordInput = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInput.current.value;
    console.log(enteredNewPassword);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCEOcOpfz9doCV-rEF6MPAtRTZdx1QPJjE", {
        method : 'POST',
        body : JSON.stringify({
          idToken : authCtx.token,
          password : enteredNewPassword,
          returnSecureToken : false
        }),
        headers : {
          'content-type' : 'application/json'
        }
      }).then((_res) => {
        history('/',{replace : true}) 
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7" ref={newPasswordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
