import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/R.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="E logo" />
      <ul>
        <li>
          <Link to="/items">items</Link>
        </li>
        <li>logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
