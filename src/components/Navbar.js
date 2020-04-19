import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';


export const Navbar = () => {
    
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark  
    
    return (
        <nav style={{ background: theme.ui, color: theme.syntaxText }}>
            <h1>Context app</h1>
            <div>
                { isAuthenticated ? 'logged in' : 'Logged out' }
            </div>
            <div>
                <button onClick={toggleAuth}>Change log status</button>
            </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </nav>
    )
}
