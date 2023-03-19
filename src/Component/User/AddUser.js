import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value.trim());
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const setErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={setErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>

          <label htmlFor="age">Age(Year)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="onSubmit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
