import React, { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameInputIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = nameInputTouched && !nameInputIsValid;

  const emailInputIsValid = enteredEmail.includes("@");
  const emailInputIsInValid = emailInputTouched && !emailInputIsValid;

  const formIsValid = nameInputIsValid && emailInputIsValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameInputTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEmailInputTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!formIsValid) return;

    console.log(`name : ${enteredName}, email:  ${enteredEmail}`);

    setEnteredName("");
    setNameInputTouched(false);

    setEnteredEmail("");
    setEmailInputTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label>Your name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label>Your email</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInValid && (
          <p className="error-text">E-mail must not be empty</p>
        )}
      </div>
      {}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
