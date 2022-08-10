import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);
  
  // the function takes in new username and age and add it to the array of the State
  const addUserHandler = (newUsername, newAge) => {
    // overwrite the default set function
    // the set function now takes in a list (prevUsersList)
    // copy that list and add new object element that contains
    // new username and new age
    // the new array returned will be the current State
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: newUsername, age: newAge}]; 
    });
  }

  return (
    // addUserHandler function will be passed to AddUser component as props to be used there
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
