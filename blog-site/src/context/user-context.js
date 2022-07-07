import { createContext, useState } from "react";

export const UserContext = createContext({
    cred : [],
    isLoggedin : false,
    user : '',
    login : (_form) => {/* */},
    logout : () => {/* */},
    signup : (_form) => {/* */}
})

const UserContextProvider = (props) => {
    const[loggedUser, setLoggedUser] = useState('')
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[credential, setCredential] = useState([{username: 'rj', password : 'Rj@123'}])

    const loginHandler = (form, selectVal) => {
        let usr;
        
        if(selectVal === "Username/password") {
            usr = credential.find((cred) => {
                return (cred.username === form.username && cred.password === form.password)
            })
        }
        else {
            usr = credential.find((cred) => {
                return (cred.email === form.email && cred.password === form.password)
            })
        }
        if(usr) {
            setIsLoggedIn(true);
            setLoggedUser(usr.username)
            return true;
        }
        alert('username/email or password invalid');
    }

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    const signUpHandler = (form) => {
        const user = credential.find((cred) => {
            return cred.username === form.username && cred.password === form.password
        })
        if(user) {
            console.log('username already exists');
            return ;
        }
        setCredential((prevCred) => prevCred.concat(form))
    }

    const contextValue = {
        cred : credential,
        isLoggedin : isLoggedIn,
        user : loggedUser,
        login : loginHandler,
        logout : logoutHandler,
        signup : signUpHandler
    }
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
