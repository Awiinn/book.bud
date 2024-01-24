/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";
import { useRegisterUserMutation } from "../api/api";

export default function Register({ token, setToken }) {
  const [addNewUser, { isLoading }] = useRegisterUserMutation();
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewUser(registerData);
    } catch (error) {
      console.error("Error Adding New Player", error);
    }
  };

  console.log(registerData);
  return (
    <>
      <div className="form-container">
        <h1>Register New User</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={registerData.firstname}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={registerData.lastname}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={registerData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              value={registerData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register User"}
          </button>
        </form>
      </div>
    </>

    // <div id="sign">
    //   <h2>Sign Up</h2>
    //   {error && <p>{error}</p>}

    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Username:
    //       <input
    //         className="user"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </label>
    //     <br />

    //     <label>
    //       Password:
    //       <input
    //         className="pass"
    //         type="password"
    //         pattern="(?=.*[a-z]).{8}"
    //         title="Must contain 8 characters in length."
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <button>Register</button>
    //     <div id="message">
    //       <h3>Password must contain the following:</h3>
    //       <p id="length" className="invalid">
    //         Contains <b>8 characters</b>
    //       </p>
    //     </div>
    //   </form>
    // </div>
  );
}
