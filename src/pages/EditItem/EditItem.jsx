import React, { useState } from "react";
import ".././AddItems/AddItems.css";
import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import supra from "../../images/supra.png";
import "./EditItem.css";

const EditItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const data = {
    id: 1,
    image: supra,
    name: "supra car",
    price: 200,
  };
  const sendData = (event) => {
    event.preventDefault();
    let data = { name: name, price: price, image: image };
    console.log(data);
  };
  return (
    <div className="additem">
      <Sidebar />
      <div className="container">
        <h1>Edit Item</h1>
        <form onSubmit={(event) => sendData(event)}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            defaultValue={data.name}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            defaultValue={data.price}
          />
          <img src={data.image} alt="" />
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <input type="submit" value="Edit item" />
        </form>
      </div>
    </div>
  );
};

export default EditItem;
