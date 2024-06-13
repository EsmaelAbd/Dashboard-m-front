import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/R.png";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    axios.post(
      "/logout",
      {
        header: {
          Authorization: localStorage.getItem("token"),
        },
      }.then(
        (res) => console.log(res),
        localStorage.removeItem("token"),
        navigate("/login")
      )
    );
  };
  return (
    <div className="sidebar">
      <img src={logo} alt="E logo" />
      <ul>
        <li>
          <Link to="/items">items</Link>
        </li>
        <li>
          <button onClick={logout}>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
