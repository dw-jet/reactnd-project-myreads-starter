import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  state = {
    books: []
  }

  searchBooks = (e) => {
    if (e) {
      BooksAPI.search(e.target.value)
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
    }
  }

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