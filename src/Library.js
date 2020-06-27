import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Library extends Component {
  state = {
    books: [],

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

  filterShelf(shelfName) {
    const books = this.state.books
    return(
      books.filter((book)=>{
        return book.shelf === shelfName.code;
      })
    )
  }

    render() {
      return(
        this.state.shelves.map((shelf) => {
          return <Shelf key={shelf.code} books={this.filterShelf(shelf)} shelfName={shelf} update = {this.updateShelf} />
        })
      )  
    }
  }

  export default Library