import React from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

function Book(props) {
  const { book, update } = props
  if (book.imageLinks !== undefined){
    return ( 
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <ShelfChanger book={ book } update={ update } />
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && (<div className="book-authors">{book.authors.join(" & ")}</div>) }
          
        </div>
      </li>
    )
  }
  else {
    return null
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}
  
  export default Book