import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component {
  render() {
    return(
      this.props.shelves.map((shelf) => {
        return <Shelf 
        key={shelf.code} 
        books={this.props.filterShelf(this.props.books, shelf)} 
        shelfName={shelf} 
        update={this.props.updateShelf} />
      })
    )  
  }
}
  
  export default Library