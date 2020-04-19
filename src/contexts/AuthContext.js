import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [ isAuthenticated, setAuthentication ] = useState(false)

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    return (
        <div>
            <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
                    { props.children }
            </AuthContext.Provider>
        </div>
    )
}
