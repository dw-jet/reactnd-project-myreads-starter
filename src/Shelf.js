import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function Shelf(props) {
  const {books, shelfName, update} = props
  return ( 
    <div className = "bookshelf" >
      <h2 className = "bookshelf-title">{shelfName.sentence}</h2> 
      <div className = "bookshelf-books">
        <ol className = "books-grid">
          {books.map((b) => (
            <Book key={b.id} book={b} update={update} />
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}

export default Shelf