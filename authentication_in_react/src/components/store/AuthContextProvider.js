import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: null,
  login: (_token) => {
    /*  */
  },
  logout: () => {
    /*  */
  },
});


export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');

  const [token, setToken] = useState(initialToken);
  const useIsLoggedIn = !!token;

  const lgooutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');

  };
  
  const lgoinHandler = (tkn) => {
    setToken(tkn);
    localStorage.setItem('token', token)
  };


  const contextValue = {
    token,
    isLoggedIn: useIsLoggedIn,
    login: lgoinHandler,
    logout: lgooutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
