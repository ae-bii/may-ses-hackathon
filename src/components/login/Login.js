import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import './Login.css'

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let navigate = useNavigate();

  const onSubmit = () => {
      navigate('/input', {replace: true})
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login