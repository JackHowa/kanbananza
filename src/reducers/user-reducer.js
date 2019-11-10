import { users as defaultUsers } from "../normalized-state";

const userReducer = (users = defaultUsers, action) => {
  console.log(users, action);
  return users;
};

export default userReducer;
