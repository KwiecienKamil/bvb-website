import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Players from "./pages/Players";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5000/players").then((request) => {
      setBackendData(request.data);
    });
  }, []);
  return (
    <>
     <Home />
     <Navbar />
     <Players />
     <Shop />
    </>
  );
}

export default App;
