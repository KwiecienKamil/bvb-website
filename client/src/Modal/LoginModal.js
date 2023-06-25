import React from 'react'
import  ReactDOM  from 'react-dom'
import '../css/loginModal.css'

const LoginModal = (props) => {
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
            <button type='submit'>LOG IN</button>
        </div>
        <div className="sign-in">
        <p>Don't have account? <a onClick={props.onShowSignIn}>Sign in</a></p>
        </div>
    </div>,
    document.getElementById('portal')
  )
  )
}

export default LoginModal
