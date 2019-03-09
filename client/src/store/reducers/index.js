import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import subReducer from "./subReducer";

export default combineReducers({
  todos: todoReducer,
  subTodos: subReducer
});
