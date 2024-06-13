import React, { useState } from "react";
import "./LogIn.css";
import logo from "../../images/R.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const sendData = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", "Bearer " + res.data.token);
        navigate("/");
      })
      .catch((error) => console.log(error));
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
