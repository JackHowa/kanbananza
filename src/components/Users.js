import React from "react";

import CreateUser from "./CreateUser";
import UserContainer from "../containers/UserContainer";

const Users = ({ userIds = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser />
      {userIds.map(userId => (
        <UserContainer key={userId} userId={userId} />
      ))}
    </section>
  );
};

export default Users;
