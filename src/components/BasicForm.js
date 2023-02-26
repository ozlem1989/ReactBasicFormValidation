import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const firstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameIsInValid = !firstNameIsValid && firstNameTouched;

  const lastNameIsValid = enteredLastName.trim() !== "";
  const lastNameIsInValid = !lastNameIsValid && lastNameTouched;

  const emailIsValid = enteredEmail.includes("@");
  const emailIsInValid = !emailIsValid && emailTouched;

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    setFirstNameTouched(false);
    setLastNameTouched(false);
    setEmailTouched(false);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const firstNameBlurHandler = () => {
    setFirstNameTouched(true);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameBlurHandler = () => {
    setLastNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const firstNameClasses = firstNameIsInValid
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailIsInValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInValid && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInValid && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInValid && <p className="error-text">E-mail is not valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
