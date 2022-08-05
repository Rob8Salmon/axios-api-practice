import "./App.css";
import React from "react";
import Axios from "axios";
// import api from "https://dog.ceo/dog-api/documentation";
import { useState } from "react";
import ResponseData from './components/ResponseData'



const App = () => {
  return (
    <div>
      <ResponseData></ResponseData>
    </div>
  );
};

export default App;
