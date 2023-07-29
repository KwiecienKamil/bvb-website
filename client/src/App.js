import React, { useState } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Players from "./pages/Players";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginModal from "./Modal/LoginModal";
import SignInModal from "./Modal/SignInModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
    setShowSignIn(false);
  };
  const showSignInHandler = () => {
    setShowSignIn(!showSignIn);
    setShowLogin(false);
  };
  const closeLoginHandler = () => {
    setShowLogin(false);
    setShowSignIn(false);
  };
  return (
    <div className="App">
      <Home onShowLogin={showLoginHandler} onCloseLogin={closeLoginHandler} />
      {showLogin && (
        <LoginModal
          onShowSignIn={showSignInHandler}
          onCloseLogin={closeLoginHandler}
        />
      )}
      {showSignIn && (
        <SignInModal
          onShowLogin={showLoginHandler}
          onCloseSignIn={closeLoginHandler}
        />
      )}
      <Navbar />
      <Players />
      <Shop />
      <About />
    </div>
  );
}

export default App;
