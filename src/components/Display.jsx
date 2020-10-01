import React from "react";
import resources from "../ml_resources.json";

const Display = () => {
  return (
    <div>
      <h1>
        <span>ML Resources</span>
      </h1>

      <dl className="json">
        {(resources.courses).map((resource, index) => {
          return (
            <div className="bxstyle" key={resource.id}>
              <dt>
                <span className="title" role="img" aria-label={resource.title}>
                  {resource.title}
                </span>
              </dt>
              <dd>
                <span className="describe">{resource.description}</span>
                <br />
                <a
                  href={resource.link}
                  className="anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the resource-{">"}
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
      <h1><span>Some of the Books</span></h1>
      <div className="bookslist">
          {(resources.books).map((book, index) => {
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

    </div>
  );
};

export default Display;
