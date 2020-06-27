import React from 'react'

function ShelfChanger(props) {
  const {book, update} = props
  return ( 
    <div className = "book-shelf-changer">
      <select 
        onChange={(e) => {
          const newShelf = e.target.value
          update(book, newShelf)
        }}
        value={"none"}
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