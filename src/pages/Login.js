import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../components/input/Input";
import ErrorAlert from "../components/error/Alert";
import { users } from "../staticData/usersData";
import { current } from "immer";

function LoginPage(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const emailIsValid = enteredEmail.includes('@');
  const emailInputIsInValid = !emailIsValid && enteredEmailTouched;

  const passwordIsValid = enteredPassword.trim().length > 6;
  const passwordInputIsInValid = !passwordIsValid && enteredPasswordTouched;

  let formIsValid = emailIsValid && passwordIsValid ? true : false;

  const history = useHistory();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const passwordChangeHanlder = (event) => {
    setEnteredPassword(event.target.value);
  }

  const validateEmailHandler = () => {
    setEnteredEmailTouched(true);
  }

  const validatePasswordHandler = () => {
    setEnteredPasswordTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    const currentUser = users.filter((user) => {
      return user.email === enteredEmail && user.password === enteredPassword;
    })

    if (!formIsValid || (currentUser.length == 0)) {
      setShowErrorAlert(true);
      return;
    }


    props.onLogin();
    history.push('/home');

    setEnteredEmail('');
    setEnteredPassword('');

    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  }

  return (
    <div>
      {showErrorAlert &&
        <ErrorAlert errorValue="User doesn't exist! Please login with valid Email & Password" />
      }

      <div className="form-control">
        <h2 style={{ "textAlign": "center" }}> Login Here </h2>
        <form onSubmit={submitHandler} noValidate>
          <Input
            inputLabel="Email"
            type="email"
            id="email"
            name="email"
            enteredInput={enteredEmail}
            inputChangeHandler={emailChangeHandler}
            validateInputHandler={validateEmailHandler}
            inputIsInValid={emailInputIsInValid}
            errorText="Enter valid Email"
          />

          <Input
            inputLabel="Password"
            type="password"
            id="password"
            name="password"
            enteredInput={enteredPassword}
            inputChangeHandler={passwordChangeHanlder}
            validateInputHandler={validatePasswordHandler}
            inputIsInValid={passwordInputIsInValid}
            errorText="Enter valid Password"
          />

          <button className="login-button" disabled={!formIsValid}> Login </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;