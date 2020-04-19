import React, { useState, createContext } from 'react'

export const BookContext = createContext();

export const BookContextProvider = (props) => {
    
  const [books, setBooks] =  useState([
        {title: 'name of the wind', id: 1},
        {title: 'rosky mascatrosky', id: 2},
        {title: 'impossible mission', id: 3}
    ])
    
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

