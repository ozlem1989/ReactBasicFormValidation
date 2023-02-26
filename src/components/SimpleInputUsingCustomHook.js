import useInput from "../hooks/use-input";

const isInputEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const SimpleInputUsingCustomHook = () => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputIsInValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isInputEmpty);
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputIsInValid,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const formIsValid = nameInputIsValid && emailInputIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(`name : ${enteredName}, email:  ${enteredEmail}`);

    resetNameInput();
    resetEmailInput();
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

export default SimpleInputUsingCustomHook;
