/*
import "./App.css";
import React, { useState, useEffect } from "react";
import { LoginFormik } from "./components/LoginFormik";
import API from "./config/api";

function App() {
  const [ setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get
    (`/trainer/2`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><LoginFormik/></>
}

export default App;
*/
import "./App.css";
import React, { useState, useEffect } from "react";
import API from "./config/api";
import { LoginFormik } from "./components/LoginFormik"

function App() {
  const [trainer, setTrainer] = useState();
  console.log(trainer);
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><LoginFormik /></>;
}

export default App;