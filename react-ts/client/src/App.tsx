import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import { userContext } from "./context/user-context";
import { Fragment, useContext, useCallback, useEffect, useState } from "react";
import LayOut from "./components/layout/LayOut";
import checkCookie from "./services/checkCookie";
import NotFound from "./components/NotFound";
import Cookies from "js-cookie";


type CheckResponse = {
  status: string;
  username: string;
  role: string;
};

function App() {
  const userCtx = useContext(userContext);
  const login = userCtx.isLoggedIn;
  const [, setUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const log = useCallback(async () => {
    const cookies = Cookies.get("auth");
    if(cookies) {
      console.log(cookies);      
      const c = await checkCookie(cookies);
      if (c.status === "success") {
        const res = c as CheckResponse;
        userCtx.login(res.role);
        return true;
      } else {
        return false;
      }
    }else return false
  }, [userCtx]);

  useEffect(() => {
    const checking = async () => {
      setLoading(true);
      try {
        const res = await log();
        setUser(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    checking();
  }, [log]);

  if (login) {
    return (
      <div className="App">
        <Routes>
          <Route path="/home/*" element={<LayOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  } else if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <Fragment>
        <Routes>
          <Route path="*" element={<AuthForm />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;
