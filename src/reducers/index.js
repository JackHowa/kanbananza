import { combineReducers } from "redux";

import lists from "./list-reducer";
import users from "./user-reducer";
import cards from "./card-reducer";

export default combineReducers({
  lists,
  users,
  cards
});
