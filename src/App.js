import axios from "axios";
import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [loaddata, setaloaddata] = useState([]);
  const [loading, isloading] = useState(false);
  const handleClick = () => {
    isloading("loading.....");
    axios.get("/api/users").then((response) => {
      isloading(false);
      setaloaddata(response.data.users);
    });
  };
  return (
    <div className="App">
      <h1> Data </h1>
      <p>{loading}</p>
      <button onClick={handleClick}> Click to load data from server </button>
      {loaddata &&
        loaddata.map((item) => {
          return <li> {item.name}</li>;
        })}
    </div>
  );
}
