import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "./Items.css";
import supra from "../../images/supra.png";

const Items = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("token", "test");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const data = [
    {
      id: 1,
      image: supra,
      name: "supra",
      price: 15000,
    },
    {
      id: 2,
      image: supra,
      name: "supra 2",
      price: 20000,
    },
  ];

  const show = (id) => {
    navigate(`/item/${id}`);
  };
  const update = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="items">
      <Sidebar />
      <div className="container">
        <div className="header">
          <h1>All Items</h1>
          <Link to="/items/add">add item</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr>
                  <td>{element.id}</td>
                  <td>
                    <img src={element.image} alt={element.name} />
                  </td>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>
                    <button onClick={() => show(element.id)}>show</button>
                    <button onClick={() => update(element.id)}>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
