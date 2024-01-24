import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../api/api";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { filterBook } from "./booksSlice";

const Books = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetAllBooksQuery();
  const books = useSelector(filterBook);
  console.log(books);
  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="books">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          books.map((itm) => (
            <div key={itm.id} className="book-container">
              <div className="book-image-container">
                <img
                  className="book-image"
                  src={itm.coverimage}
                  alt={itm.title}
                />
              </div>
              <div className="book-details">
                <h1>{itm.title}</h1>
                <p>{itm.author}</p>
                <p>{itm.available}</p>
                {/* ===  ? <p>Is Available</p> : <p>Is Not Available</p> */}
                <button onClick={() => navigate(`/books/${itm.id}`)}>
                  See Details
                </button>
                <br />
                <button>Checkout</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Books;
