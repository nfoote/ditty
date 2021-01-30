import { combineReducers } from "redux";
import todosReducer from "./todoSlice";

export default combineReducers({
  todos: todosReducer,
});
