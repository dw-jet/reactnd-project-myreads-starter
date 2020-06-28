import React from 'react'
import PropTypes from 'prop-types'

function ShelfChanger(props) {
  const {book, update} = props
  return ( 
    <div className = "book-shelf-changer">
      <select 
        onChange={(e) => {
          const newShelf = e.target.value
          update(book, newShelf)
        }}
        value={book.shelf}
      >
        <option disabled > Move to... </option> 
        <option value = "currentlyReading"> Currently Reading </option> 
        <option value = "wantToRead" > Want to Read </option> 
        <option value = "read" > Read </option> 
        <option value = "none" > None </option>
      </select> 
    </div>
  )
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}

export default ShelfChanger