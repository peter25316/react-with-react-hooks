import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

const AddUser = (props) => {
  // Username and age States
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // Error State
  const [error, setError] = useState();

  // when submit button is clicked (onSubmit event), function will be called
  const addUserHandler = (event) => {
    event.preventDefault();

    // Set error
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // Forcing enteredAge to be a number by using "+"
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    // Use onAddUser property of props (which calls addUserHandler function of App component)
    props.onAddUser(enteredUsername, enteredAge);

    // Reset inputs (by feeding current State to <input> using "value")
    setEnteredUsername("");
    setEnteredAge("");
  };

  // With every key stroke event triggers (onChange), function will be called
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  // With every key stroke event triggers (onChange), function will be called
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  // Error: if there is error then show the ErrorModal component
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
