import React from 'react'

function ShelfChanger(props) {
  return ( 
    <div className = "book-shelf-changer">
      <select 
        onChange={(e) => {
          const newShelf = e.target.value
          props.update(props.book, newShelf)
        }}
        value={props.book.shelf}
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

export default ShelfChanger