import React from "react";
import clsx from "clsx";
import "./Input.css";

function Input(props) {
  const {
    inputLabel,
    type,
    id,
    name,
    enteredInput,
    inputChangeHandler,
    validateInputHandler,
    inputIsInValid
  } = props;

  return (
    <div className={clsx('control', inputIsInValid ? 'invalid' : '')}>
      <label htmlFor={id}> {inputLabel} </label>

      <input
        type={type}
        id={id}
        name={name}
        value={enteredInput}
        onChange={inputChangeHandler}
        onBlur={validateInputHandler}
      />

      {inputIsInValid && <p className="errorText"> Enter Valid Email </p>}

    </div>
  )
}

export default Input;