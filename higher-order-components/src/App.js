import React from "react";
import UserList from "./UserList";
import WithLoader from "./WithLoader";

const App = ()=>{
  const list = ['Alice', 'Bob', 'Charlie'];
  const EnhancedUserList = WithLoader(UserList, list);

  return (
    <div>
      <h1>Our Team Members</h1>
      <EnhancedUserList/>
    </div>
  )
};

export default App;