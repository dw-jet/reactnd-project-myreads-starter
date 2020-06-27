import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],

    searchResults: [],

    shelves: [
      {
        sentence: 'Currently Reading', 
        code:'currentlyReading'
      }, 
      {
        sentence: 'Want to Read',
        code: 'wantToRead'
      }, 
      {
        sentence: 'Read',
        code: 'read'
      }
    ]
  }

  updateShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        this.loadBooks()
      })
  }

  loadBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  
  componentDidMount() {
    this.loadBooks()
  }

  filterShelf(books, shelfName) {
    return(
      books.filter((book)=>{
        return book.shelf === shelfName.code;
      })
    )
  }

  searchBooks = (e) => {
    if (e) {
      BooksAPI.search(e.target.value)
      .then((searchResults) => {
        this.setState(() => ({
          searchResults
        }))
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Route exact path='/' render={() => (
          <div>
            <Library shelves={this.state.shelves} books={this.state.books} filterShelf={this.filterShelf} updateShelf={this.updateShelf} />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>            
          </div>
        )} />
        <Route path='/search' render={() => (
          <BookSearch books={this.state.searchResults} searchBooks={this.searchBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
