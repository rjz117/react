import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../context/user-context.js";
import classes from "./MainHeader.module.css";

const MainNavigation = () => {
  const userCtx = useContext(UserContext);
  let user = userCtx.user;
  const loggedIn = userCtx.isLoggedin;

  const redirectLink = loggedIn ? "/new-blog" : "/login";

  return (
    <Fragment>
      <header className={classes.header}>
        <Link className={classes.blogbtn} to="/home">
          Home
        </Link>
        {loggedIn && (
          <Link className={classes.blogbtn} to="/my-blogs">
            My-Blogs
          </Link>
        )}
        <Link className={classes.blogbtn} to={redirectLink}>
          write something to make better world
        </Link>

        {!loggedIn && (
          <Link className={classes.btn} to="/login">
            Login
          </Link>
        )}
        {loggedIn && <p className={classes.btn}>{user}</p>}
      </header>
    </Fragment>
  );
};

export default MainNavigation;
