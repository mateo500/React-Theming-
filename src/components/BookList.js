import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'



export default class BookList extends Component {
    
    static contextType = ThemeContext;
   
   
    render() {

        const { isLightTheme, light, dark  } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div style={{ color: theme.syntaxText, background: theme.bg}} >
                <ul className="book-list-ul">
                    <li style={{ background: theme.ui }}>the way of king</li>
                    <li style={{ background: theme.ui }}>chinese democracy</li>
                    <li style={{ background: theme.ui }}>final empire</li>
                </ul>
            </div>
        )
    }
}
