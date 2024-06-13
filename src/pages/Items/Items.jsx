import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "./Items.css";
import supra from "../../images/supra.png";
import axios from "axios";

const Items = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    axios
      .get("http://127.0.0.1:8000/api/items", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  }, []);

  const show = (id) => {
    navigate(`/item/${id}`);
  };
  const update = (id) => {
    navigate(`/edit/${id}`);
  };
  const deleteItem = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/items/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res.data));
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
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/images/${element.image}`}
                      alt={element.name}
                    />
                  </td>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>
                    <button onClick={() => show(element.id)}>show</button>
                    <button onClick={() => update(element.id)}>update</button>
                    <button onClick={() => deleteItem(element.id)}>
                      delete
                    </button>
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
