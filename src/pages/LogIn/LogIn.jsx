import React, { useState } from "react";
import "./LogIn.css";
import logo from "../../images/R.png";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const sendData = (event) => {
    event.preventDefault();
    axios
      .POST("api", { email: email, password: password })
      .then((res) => console.log(res));
  };

  return (
    <div className="login">
      <form onSubmit={() => sendData(event)}>
        <img src={logo} alt="logo" />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default LogIn;
