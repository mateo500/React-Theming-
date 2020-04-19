import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'


export const BookList = () => {
   
    const { isLightTheme, light, dark } =  useContext(ThemeContext)
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list-ul" style={{ color: theme.syntaxText, background: theme.bg}}>
                <ul>
                    {books.map(book => {
                        return(
                            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                        )
                    })}
                </ul>
        </div>
    )
}