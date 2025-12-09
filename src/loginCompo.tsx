import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState("");
  const [userErrors, setUserErrors] = useState("");

  const SumbitBtn = (event: any) => {
    event.preventDefault();

    if (username == "") {
      setUserError("Please enter your username");
    }
    if (password == "") {
      setUserErrors("Please enter your password");
    }
  };

  const changeHandler = (Event: any) => {
    setUsername(Event.target.value);
    if (Event.target.value == "") {
      setUserError("please enter your username");
    }
    if (Event.target.value.length < 3) {
      setUserError("enter minimum 3 characters");
    } else {
      setUserError("");
    }
  };
  const changeHandlers = (Event: any) => {
    setPassword(Event.target.value);
    if (Event.target.value == "") {
      setUserErrors("enter your password");
    } else {
      setUserErrors("");
    }
  };

  return (
    <div className="Section">
      <h1>Login Section</h1>
      <form>
        <label>Username :</label> <br />
        <input type="text" value={username} onChange={changeHandler} /> <br />
        <p className="error">{userError}</p>
        <label>Password :</label> <br />
        <input
          type="password"
          value={password}
          onChange={changeHandlers}
        />{" "}
        <br />
        <p className="error">{userErrors}</p>
        <button onClick={SumbitBtn}>Submit</button>
      </form>
    </div>
  );
};
export default Login;
