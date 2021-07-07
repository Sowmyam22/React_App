import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Input from "../components/input/Input";
import {users} from "../staticData/usersData";

function ProfileSettings(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredDob, setEnteredDob] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  let nameInputIsInValid;
  let passwordInputIsInValid;
  let dobInputIsInValid;

  const history = useHistory();
  let userData = users[0];

  const dateInputStyles = {
    width: '50%',
    marginRight: '1rem'
  }

  useEffect(() => {
    if (userData) {
      setEnteredName(userData.name);
      setEnteredDob(userData.dob);
    }
  }, [])

  const ageInputStyles = {
    width: '50%',
  }

  const nameChangeHandler = () => {

  }

  const passwordChangeHandler = () => {

  }

  const dobChangeHandler = (event) => {
    setEnteredDob(event.target.value);
  }

  const validateNameHandler = () => {

  }

  const validatePasswordHandler = () => {

  }

  const validateDobHandler = () => {

  }

  const calculateAge = (dob) => {
    let today = new Date();
    let birthDate = new Date(dob);

    let currentAge = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }

    setEnteredAge(currentAge);
  }

  useEffect(() => {
    if (enteredDob) {
      calculateAge(enteredDob);
    }
  }, [enteredDob])

  const submitHandler = (event) =>{
    event.preventDefault();
  }

  const deleteCurrentUser = (event) => {
    event.preventDefault();

    const userIndex = users.findIndex((user) => user.id === userData.id);

    if (userIndex > -1) {
      users.splice(userIndex, 1);
      props.logoutHandler();
      history.replace('/');
    }
  }

  return (
    <Fragment>
      <div className="user-form-control">
        <h2 style={{ "textAlign": "center" }}>Please update your information below...!</h2>
        <hr />
        <form className="profile-form" onSubmit={submitHandler}>
          <Input
            inputLabel="Name"
            type="text"
            id="name"
            name="name"
            enteredInput={enteredName}
            inputChangeHandler={nameChangeHandler}
            validateInputHandler={validateNameHandler}
            inputIsInValid={nameInputIsInValid}
          />

          <Input
            inputLabel="New Password"
            type="password"
            id="password"
            name="password"
            enteredInput={enteredPassword}
            inputChangeHandler={passwordChangeHandler}
            validateInputHandler={validatePasswordHandler}
            inputIsInValid={passwordInputIsInValid}
          />

          <div style={{ "display": "flex", "alignItems": "center", "marginTop": "-1rem" }}>
            <Input
              inputLabel="DOB"
              type="date"
              id="dob"
              name="dob"
              enteredInput={enteredDob}
              inputChangeHandler={dobChangeHandler}
              validateInputHandler={validateDobHandler}
              inputIsInValid={dobInputIsInValid}
              customStyles={dateInputStyles}
            />

            <Input
              inputLabel="Age"
              type="text"
              id="age"
              name="age"
              enteredInput={enteredAge}
              customStyles={ageInputStyles}
              disabled={true}
            />
          </div>

          <button className="update-button"> Update </button>
          <button className="delete-button" onClick={deleteCurrentUser}> Delete </button>
        </form>
      </div>
    </Fragment>
  )
}

export default ProfileSettings;