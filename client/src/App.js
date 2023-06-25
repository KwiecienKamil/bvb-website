import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Players from "./pages/Players";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginModal from "./Modal/LoginModal";
import SignInModal from "./Modal/SignInModal";


function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showSignIn, setShowSignIn] = useState(false)

  const showLoginHandler = () => {
    setShowLogin(!showLogin)
    setShowSignIn(false)
  }
  const showSignInHandler = () => {
    setShowSignIn(!showSignIn)
    setShowLogin(false)
  }
  return (
    <>
     <Home onShowLogin={showLoginHandler}/>
     {showLogin && <LoginModal onShowSignIn={showSignInHandler}/>}
     {showSignIn && <SignInModal onShowLogin={showLoginHandler}/>}
     <Navbar />
     <Players />
     <Shop />
     <About />
    </>
  );
}

export default App;
