import UdacityBookshelf from "./UdacityBookshelf";
import { useState } from "react";
import { search } from "../BooksAPI";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [inputTextSearch, setInputTextSearch] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const text = e.target.value;

    setInputTextSearch(text);
    getSearchData(text);
  };

  const getSearchData = async (text) => {
    if (text) {
      const datas = await search(text, 20);
      setBooks(datas);
    }
  };

  const backToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => backToHomePage()}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputTextSearch}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        {books?.length > 0 && <UdacityBookshelf books={books} />}
      </div>
    </div>
  );
};

export default SearchPage;
