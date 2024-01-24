// 1) Build input box
// 2) onChange method for input
// 3) useEffect for every input update, print out input string
// 4) create dispatch and make sure payload prints out filter string
// 5) filter array off of string
// 6) see the useEffect updates the array

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { filterBook, filterArray } from "./booksSlice";

const SearchBar = (value) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const books = useSelector(filterBook);

  const results = books.filter((itm) => {
    itm && itm.title && itm.title.toLowerCase().includes(value);
  });
  console.log(results);

  const handleChange = (e) => {
    dispatch(setInput(e.target.value));
  };
  return (
    <>
      <div className="search-bar-container">
        <div className="input-wrapper">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Filter by Book Title..."
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
