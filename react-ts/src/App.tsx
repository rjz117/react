import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import { userContext } from "./context/user-context";
import { Fragment, useContext } from "react";
import LayOut from "./components/layout/LayOut";
import LanguageChange from "./components/LanguageChange/LanguageChange";
import check from "./services/check";

function App() {
  const userCtx = useContext(userContext);
  const login = userCtx.isLoggedIn;

  const log = check();
  userCtx.role = log.role;

  return (
    <Fragment>
      <div className="App">
        {login && (
          <Routes>
            <Route path="/home/*" element={<LayOut />} />
          </Routes>
        )}
          {!login && (
            <Routes>
              <Route path="*" element={<AuthForm />} />
            </Routes>
          )}
        <LanguageChange />
      </div>
    </Fragment>
  );
}

export default App;
