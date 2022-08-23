import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

const AddUser = (props) => {
  // When the "submit" button is clicked, ref will assigned espected element 
  // to these two varibles. In this case they will be the two "input"s
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Username and age States
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  // Error State
  const [error, setError] = useState();

  // when submit button is clicked (onSubmit event), function will be called
  const addUserHandler = (event) => {
    event.preventDefault();

    // Collect the values of the two refs
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // Set error
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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
    props.onAddUser(enteredName, enteredAge);

    // Reset inputs (by feeding current State to <input> using "value")
    // setEnteredUsername("");
    // setEnteredUserAge("");

    // Reseting input using ref
    // This is DOM manipulation so it is VERY RARELY used 
    // In our case it is fine because we only read data and we don't need
    // change anything.
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // // With every key stroke event triggers (onChange), function will be called
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // // With every key stroke event triggers (onChange), function will be called
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

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
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
