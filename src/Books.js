import React from 'react'
import "./Books.css";
import bookslist from "./ml_books.json";
function Books() {
    return (
        <div className="booksText">
            <h1>Some of the Books</h1>
            {Bookslist()}
        </div>
    )
}
function Bookslist() {
    return(
        <div className="bookslist">
              {bookslist.map((book, index) => {
          return (
            <div className="booklist" key={book.id}>
                <span className="title" role="img" aria-label={book.title}>
                  {book.title}
                </span>
          <span className="books_Author">{book.Author}</span>
                <br />
                <br/>
                <img src={book.frontcoverimglink}/>
                <br/>
                <br/>
                <a
                  href={book.googlebooks}
                  className="anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the google books-{">"}
                </a>
            </div>
          );
        })}
            </div>

    )
    
}

export default Books
