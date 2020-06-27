import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookSearch extends Component {

  render() {
    return(
      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to='/' >Close</Link>
      <div className="search-books-input-wrapper">
      <input type="text" onChange={this.searchBooks} placeholder="Search by title or author"/>
      </div>
      </div>
      <Shelf books={this.state.books} shelfName={{sentence: 'Search'}}/>
      </div>
      )
    }
  }
  
  export default BookSearch