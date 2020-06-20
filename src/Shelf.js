import React from 'react'
import Book from './Book'

function Shelf(props) {
  const {books, shelfName} = props
  return ( 
    <div className = "bookshelf" >
      <h2 className = "bookshelf-title">{shelfName}</h2> 
      <div className = "bookshelf-books">
        <ol className = "books-grid">
          {console.log(books[0])}
          <Book book={books[0]} />
        </ol>
      </div>
    </div>
  )
}

export default Shelf