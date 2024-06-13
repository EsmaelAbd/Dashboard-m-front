import React, { useEffect, useState } from "react";
import "./AddItems.css";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const sendData = (event) => {
    event.preventDefault();
    let data = { name: name, price: price, image: image };
    axios
      .post("http://127.0.0.1:8000/api/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/items");
      })
      .catch((error) => console.log(error));
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
