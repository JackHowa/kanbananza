import { lists as defaultList } from "../normalized-state";

const listReducer = (lists = defaultList, action) => {
  console.log(lists, action);
  return lists;
};

export default listReducer;
