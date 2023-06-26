import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import '../css/loginModal.css'
import axios from "axios";


const SignInModal = (props) => {
  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  
  const register = () => {
    axios.post('http://localhost:5000/register', {
    email: emailReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response)
  })
  }
  return (
    ReactDOM.createPortal(
    <div className='modal-container'>
        <div className="username-container">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => {setEmailReg(e.target.value)}}/>
        </div>
        <div className="password-container">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>
        </div>
        <div className="modal-button">
            <button type='submit' className='sign-in' onClick={register}>SIGN IN</button>
        </div>
        <div className="question">
        <p>Already logged in?<a onClick={props.onShowLogin}>Login</a></p>
        </div>
    </div>,
    document.getElementById('portal')
  )
  )
}

export default SignInModal
