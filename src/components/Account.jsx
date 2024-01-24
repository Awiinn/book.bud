/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Account() {
  const nav = useNavigate();
  return (
    <div>
      <h1>Account</h1>
      <p>
        Log in to your account
        <button onClick={() => nav("/login")}>Login</button>
      </p>
      <p>
        Don`&apos;`t have an account?
        <Link to={"/register"}>Register for a new library card</Link>
      </p>
    </div>
  );
}
