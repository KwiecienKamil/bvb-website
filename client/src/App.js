import React, { useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";
import Players from "./pages/Players";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
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
