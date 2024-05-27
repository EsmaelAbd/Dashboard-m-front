import React, { useState } from "react";
import "./AddItems.css";
import Sidebar from "../../components/Sidebar";

const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const sendData = (event) => {
    event.preventDefault();
    let data = { name: name, price: price, image: image };
    console.log(data);
  };
  return (
    <div className="additem">
      <Sidebar />
      <div className="container">
        <h1>Add Item</h1>
        <form onSubmit={(event) => sendData(event)}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <input type="submit" value="Add item" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
