import "../App.css";
import React from "react";
import axios from "axios";
// import api from "https://dog.ceo/dog-api/documentation";
import { useState } from "react";

const ResponseData = () => {
  const [breed, setBreed] = useState("");
  const GetBreed = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`).then((res) => {
      const breed = Object.keys(res.data.message);
      const randomBreed = breed[Math.floor(Math.random() * breed.length)];
      setBreed(randomBreed);
    });
  };

  return (
    <div>
      Hello<button onClick={GetBreed}>Get Dog Breed</button>
      <h1>{breed}</h1>
    </div>
  );
};

export default ResponseData;
