import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


export const ThemeToggle = () => {
    
    const { toggleTheme } = useContext(ThemeContext)
    
    return (
        <div>
            <button onClick={toggleTheme}>Dark Mode</button>
        </div>
    )
}
