import { combineReducers } from "redux";
import incrementReducer from "./counter";

export default combineReducers({
  counter: incrementReducer
});
