import { useNavigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../../context/user-context";
import { checkCookie } from "../../services/Auth";

interface Props {
  children: React.ReactNode;
}

type Response = {
  error: boolean;
  msg: string;
};

type LoginResponse = {
  status: string;
  role: string;
  accessToken: string;
};

const PresistsLogin: React.FC<Props> = ({ children }) => {
  const authCtx = useContext(userContext);

  const tkn = localStorage.getItem("auth");

  useEffect(() => {
    const getCookie = async (token: string) => {
      const response = checkCookie();
      console.log(response);
      
      if (response !== null) {
        const res = response;
        authCtx.isLoggedIn = true;
        //   authCtx.role = res.role;
      } else {
        localStorage.clear();
      }
    };
    if (tkn) {
      getCookie(tkn!);
    }
  }, []);

  return <div>{children}</div>;
};

export default PresistsLogin;
