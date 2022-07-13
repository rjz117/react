import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import { userContext } from "./context/user-context";
import { Fragment, useContext, useCallback, useEffect, useState } from "react";
import LayOut from "./components/layout/LayOut";
import LanguageChange from "./components/LanguageChange/LanguageChange";
import check from "./services/check";
import NotFound from './components/NotFound';

type CheckResponse = {
  status: string;
  username: string;
  role: string;
};

function App() {
  const userCtx = useContext(userContext);
  const login = userCtx.isLoggedIn;
  const [user, setUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const log = useCallback(async () => {
    const c = await check();
    if (c.status === "success") {
      const res = c as CheckResponse;
      userCtx.login(res.role);
      return true;
    } else {
      return false;
    }
  }, []);

  useEffect(() => {
    const checking = async () => {
      setLoading(true);
      const res = await log();
      setUser(res);
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
