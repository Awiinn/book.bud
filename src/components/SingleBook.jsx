/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function SingleBook() {
  const params = useParams();
  const { data, isLoading } = useGetSingleBookQuery(params.id);
  const nav = useNavigate();
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{data.book.title}</h1>
          <h3>Author: {data.book.author}</h3>
          <p>Description: {data.book.description}</p>
          <h4>{data.book.available}</h4>
          <img src={data.book.coverimage} alt={data.book.title} />
          <br />
          <button onClick={() => nav("/")}>Return to Library</button>
        </div>
      )}
    </div>
  );
}