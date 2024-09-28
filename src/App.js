import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import UdacityBookshelf from "./components/udacity-bookshelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [groupBookShelfs, setGroupBookShelfs] = useState([]);

  const getBooksData = async () => {
    const datas = await getAll();
    setGroupBookShelfs(datas);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  const currentReadings = groupBookShelfs?.filter(
    (f) => f.shelf === "currentlyReading"
  );

  const wantToReads = groupBookShelfs?.filter((f) => f.shelf === "wantToRead");

  const reads = groupBookShelfs?.filter((f) => f.shelf === "read");

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {groupBookShelfs?.length > 0 && (
                <UdacityBookshelf
                  title={"Currently Reading"}
                  books={currentReadings}
                />
              )}
              {groupBookShelfs?.length > 0 && (
                <UdacityBookshelf title={"Want to Read"} books={wantToReads} />
              )}
              {groupBookShelfs?.length > 0 && (
                <UdacityBookshelf title={"Read"} books={reads} />
              )}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
