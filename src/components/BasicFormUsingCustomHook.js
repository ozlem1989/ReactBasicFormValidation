import useInput from "../hooks/use-input";

const isInputEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicFormUsingCustomHook = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameIsInValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isInputEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameIsInValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isInputEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailIsInValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
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

export default BasicFormUsingCustomHook;
