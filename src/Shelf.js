import React from 'react'
import Book from './Book'

function Shelf(props) {
  const {books, shelfName} = props
  return ( 
    <div className = "bookshelf" >
      <h2 className = "bookshelf-title">{shelfName}</h2> 
      <div className = "bookshelf-books">
        <ol className = "books-grid">
          {books.map((b) => (
            <Book key={b.title} book={b} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf