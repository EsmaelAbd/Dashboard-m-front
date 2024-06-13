import React, { useEffect, useState } from "react";
import ".././AddItems/AddItems.css";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import supra from "../../images/supra.png";
import "./EditItem.css";
import axios from "axios";

const EditItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/item");
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
  const sendData = (event) => {
    event.preventDefault();
    let newdata = {
      name: name ? name : data.name,
      price: price ? price : data.price,
      image: image,
      _method: "put",
    };
    console.log(newdata);
    axios
      .post("http://127.0.0.1:8000/api/update/" + params.id, newdata, {
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
          <img src={`http://127.0.0.1:8000/images/${data.image}`} alt="" />
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <input type="submit" value="Edit item" onClick={sendData} />
        </form>
      </div>
    </div>
  );
};

export default EditItem;
