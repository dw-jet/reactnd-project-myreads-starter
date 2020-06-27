import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

function BookSearch(props) {
  let {books, searchBooks, update} = props
  // API returns an object instead if there are no results so force it to an array to stop code breaking
  books = Array.isArray(books) ? books : []
  
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" onChange={searchBooks} placeholder="Search by title or author"/>
        </div>
      </div>
      <Shelf books={books} shelfName={{sentence: 'Search'}} update={update} />
    </div>
  )
}
  
export default BookSearch