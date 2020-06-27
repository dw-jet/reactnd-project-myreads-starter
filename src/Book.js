import React from 'react'
import ShelfChanger from './ShelfChanger'

function Book(props) {
  const { book, update } = props
  return ( 
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <ShelfChanger book={ book } update={ update } />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
    </li>
  )
}

export default Book