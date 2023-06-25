import React from 'react'
import  ReactDOM  from 'react-dom'
import '../css/loginModal.css'

const SignInModal = (props) => {
  return (
    ReactDOM.createPortal(
    <div className='modal-container'>
        <div className="username-container">
        <label htmlFor="email">Email</label>
        <input type="email" />
        </div>
        <div className="password-container">
        <label htmlFor="password">Password</label>
        <input type="password" />
        </div>
        <div className="modal-button">
            <button type='submit'>SIGN IN</button>
        </div>
        <div className="sign-in">
        <p>Already logged in?<a onClick={props.onShowLogin}>Login</a></p>
        </div>
    </div>,
    document.getElementById('portal')
  )
  )
}

export default SignInModal
