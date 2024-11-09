import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import { fetchImage, fetchCarMakes, fetchCarModels } from "./API";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [formImage, setFormImage] = useState("");
  const [formMake, setFormMake] = useState();
  const [formModel, setFormModel] = useState();
  const [formMakeList, setFormMakeList] = useState([]);
  const [formModelList, setFormModelList] = useState([]);

  useEffect(() => {
    fetchImage(formMake).then(response => {
      // console.log(response)
      setFormImage(response);
    });
  }, [formMake]);

  useEffect(() => {
    fetchCarMakes().then(makes => {
      console.log("makes", makes)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home formImage={formImage} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;