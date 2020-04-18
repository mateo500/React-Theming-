import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'


export default class Navbar extends Component {
    
    static contextType = ThemeContext

    render() {
       
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark


        return (
            <div>
                <nav style={{ background: theme.ui, color: theme.syntaxText }}>
                    <h1>Context app</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </nav>
            </div>
        )
    }
}
