import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props)=>{
    // let auth_ =
    const [auth, setAuth] =  useState({
        isAuthenticated: false
    });
    let toggleAuth = () => {
        setAuth({...auth ,isAuthenticated: !auth.isAuthenticated})
    }
    return (
        <AuthContext.Provider  value={{...auth, toggleAuth: toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
