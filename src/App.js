import React from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserListHandler = (uName, uAge) => {
    setUserList((preUserList) => {
      return [
        ...preUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
