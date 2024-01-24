/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { useUserLoginMutation } from "../api/api";

export default function Login() {
  const [loginUser, { isLoading }] = useUserLoginMutation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(loginData);
    } catch (error) {
      console.error("Error Adding New Player", error);
    }
  };

  console.log(loginData);
  return (
    <>
      <div className="form-container">
        <h1>Register New User</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login User"}
          </button>
        </form>
      </div>
    </>
  );
}
