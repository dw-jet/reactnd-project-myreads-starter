import React from 'react'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

function Library(props) {
  const {shelves, books, filterShelf, update} = props
  return(
    shelves.map((shelf) => {
      return <Shelf 
      key={shelf.code} 
      books={filterShelf(books, shelf)} 
      shelfName={shelf} 
      update={update} />
    })
  )
}

Library.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  filterShelf: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
}

export default Library