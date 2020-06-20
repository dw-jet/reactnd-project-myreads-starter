import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component {
  state = {
    books: [
      {
        author: 'David McCullough',
        title: '1776',
        cover: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
        shelf: 'Want to Read'
      },
      {
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        shelf: 'Currently Reading'
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Hobbit',
        cover: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
        shelf: 'Read'
      }
    ]
  }

  filterShelf(shelfName) {
    const books = this.state.books
    return(
      books.filter((book)=>{
        return book.shelf === shelfName;
      })
    )
  }

    render() {
      return (
        <Shelf books={this.filterShelf("Want to Read")} shelfName="Currently Reading" />
      )
    }
  }

  export default Library