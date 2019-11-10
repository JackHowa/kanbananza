import { combineReducers } from "redux";

import lists from "./list-reducer";
import users from "./user-reducer";
export default combineReducers({
  lists,
  users
});
