import React from "react";

const UdacityBookshelf = ({ title, books = [] }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((item) => {
              return (
                <li key={item.title}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url("${item.imageLinks.thumbnail}")`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{item.title}</div>
                    <div className="book-authors">{item.authors.join()}</div>
                  </div>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default UdacityBookshelf;
