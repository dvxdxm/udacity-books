import UdacityBookshelf from "./UdacityBookshelf";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const [groupBookShelfs, setGroupBookShelfs] = useState([]);
  const navigate = useNavigate();

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
              onDataChange={getBooksData}
            />
          )}
          {groupBookShelfs?.length > 0 && (
            <UdacityBookshelf
              title={"Want to Read"}
              books={wantToReads}
              onDataChange={getBooksData}
            />
          )}
          {groupBookShelfs?.length > 0 && (
            <UdacityBookshelf
              title={"Read"}
              books={reads}
              onDataChange={getBooksData}
            />
          )}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => navigate("/search")}>Search Page</button>
      </div>
    </div>
  );
};

export default DashBoardPage;
