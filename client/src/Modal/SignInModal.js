import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../css/loginModal.css";
import axios from "axios";

const SignInModal = (props) => {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    if (emailReg.length > 0 && passwordReg.length > 0) {
      axios
        .post("https://bvb-backend.onrender.com/register", {
          email: emailReg,
          password: passwordReg,
        })
      setEmailReg("");
      setPasswordReg("");
      alert('Succesfully signed up')
    } else {
      alert("Email/password can't be empty!");
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="username-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          value={emailReg}
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          value={passwordReg}
        />
      </div>
      <div className="modal-button">
        <button type="submit" className="sign-in" onClick={register}>
          SIGN UP
        </button>
      </div>
      <div className="question">
        <p>
          Already signed in?<a onClick={props.onShowLogin}>Login</a>
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SignInModal;
