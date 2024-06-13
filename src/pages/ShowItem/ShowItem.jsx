import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowItem.css";
import supra from "../../images/supra.png";
import axios from "axios";

const ShowItem = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    axios
      .get("http://127.0.0.1:8000/api/items/" + params.id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  }, []);
  function backToItems() {
    navigate("/items");
  }
  return (
    <div className="showitem">
      <Sidebar />
      <div className="container">
        <div className="header">
          <h1> {data.name} </h1>
          <img src={`http://127.0.0.1:8000/images/${data.image}`} alt="" />
          <p>price: {data.price}</p>
          <button onClick={backToItems}>Get back to Items page</button>
        </div>
        <table>
          {/* <thead>
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
                    <button>show</button>
                    <button>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ShowItem;
