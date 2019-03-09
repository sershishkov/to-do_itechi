import {
  GET_ALL_SUB_TODOS,
  DELETE_ONE_SUB_TODO,
  ADD_ONE_SUB_TODO,
  CLEAR_ALL_SUB_TODO
} from "./actionTypes";

export const createSubTodo = todoData => dispatch => {
  console.log(todoData);
  dispatch({
    type: ADD_ONE_SUB_TODO,
    payload: todoData
  });
};

export const getAllSubTodos = allSubTodos => dispatch => {
  dispatch({
    type: GET_ALL_SUB_TODOS,
    payload: allSubTodos
  });
};

export const deleteOneSubTodo = id => dispatch => {
  dispatch({
    type: DELETE_ONE_SUB_TODO,
    payload: id
  });
};

export const clearAllSubTodo = () => dispatch => {
  dispatch({
    type: CLEAR_ALL_SUB_TODO,
    payload: []
  });
};
