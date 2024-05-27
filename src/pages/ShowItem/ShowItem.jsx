import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import "./ShowItem.css";
import supra from "../../images/supra.png";

const ShowItem = () => {
  const params = useParams();
  const data = {
    id: 1,
    image: supra,
    name: "toyota supra",
    price: 15000,
  };
  return (
    <div className="showitem">
      <Sidebar />
      <div className="container">
        <div className="header">
          <h1> {data.name} </h1>
          <img src={data.image} alt="" />
          <p>price: ${data.price}</p>
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
