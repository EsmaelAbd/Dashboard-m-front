import React, { useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("token", "test");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="container"></div>
    </div>
  );
};

export default Dashboard;
