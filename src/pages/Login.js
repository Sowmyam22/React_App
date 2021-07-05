import React, { useState } from "react";

import ErrorAlert from "../components/error/Alert";

function LoginPage(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      props.onLogin();
    } else {
      setShowErrorAlert(true);
    }
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    )
  }

  const passwordChangeHanlder = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes('@') && event.target.value.trim().length > 6
    )
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  return (
    <div>
      {showErrorAlert && <ErrorAlert errorValue='Invali Email & Password! Please try again...!' />}

      <div className="form-control">
        <h2 style={{ "textAlign": "center" }}>Please Login</h2>
        <form onSubmit={submitHandler} noValidate>
          <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>

          <div className={`control ${passwordIsValid === false ? 'invalid' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password..."
              value={enteredPassword}
              onChange={passwordChangeHanlder}
              onBlur={validatePasswordHandler}
            />
          </div>

          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;