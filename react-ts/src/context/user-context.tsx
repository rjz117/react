import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type ctxValue = {
    isLoggedIn : boolean,
    role : string,
    login : (_role:string) => void,
    logout : () => void
}

const userContext = createContext<ctxValue>({
  isLoggedIn: false,
  role: '',
  login: () => {
    /* */
  },
  logout: () => {
    /* */
  },
});

const UserCotextProvider: React.FC<Props> = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const login = (userRole: string) => {
    setLoggedIn(true);
    setRole(userRole);
  };

  const logout = () => {
    setLoggedIn(false);
    setRole("");
  };

  const contextValue = {
    isLoggedIn: loggedIn,
    role: role,
    login,
    logout,
  };

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
};

export default UserCotextProvider;
export { userContext };
