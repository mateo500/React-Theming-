import React, { createContext, Component, } from 'react'

export const ThemeContext = createContext();


export default class ThemeContextProvider extends Component {
    
    state = {
        isLightTheme: true,
        light: { syntaxText: '555', ui: '#ddd', bg: '#eee' },
        dark: { syntaxText: 'ddd', ui: '#333', bg: '#555' }
    }


    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        }) 
    }
    
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


