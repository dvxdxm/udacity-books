import React from "react";
import { update } from "../BooksAPI";

const UdacityBookshelf = ({ title, books = [], onDataChange }) => {
  const handleUpdateBook = async (book, shelf) => {
    await update(book, shelf);
    if (onDataChange) {
      await onDataChange();
    }
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((item, index) => {
              return (
                <li key={item.title + index}>
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
                        <select
                          defaultValue="none"
                          onChange={(e) => {
                            console.log(e.target.value);
                            handleUpdateBook(item, e.target.value);
                          }}
                        >
                          <option disabled value="none">
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
                    <div className="book-authors">{item?.authors?.join()}</div>
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
