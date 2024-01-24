import { useState } from "react";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Navigations from "./components/Navigations";
import Login from "./components/Login";
import Account from "./components/Account";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        <Navigations />
        <h1 id="logo">
          <img id="logo-image" src={bookLogo} />
          Library App
        </h1>
        <div id="main-section">
          <Routes>
            <Route index element={<Books />} />
            <Route path={"/books/:id"} element={<SingleBook />} />
            <Route
              path={"/login"}
              element={<Login token={token} setToken={setToken} />}
            />
            <Route
              path={"/register"}
              element={<Register token={token} setToken={setToken} />}
            />
            <Route
              path={"/account"}
              element={<Account token={token} setToken={setToken} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
