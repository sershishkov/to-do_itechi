import axios from "axios";

import {
  GET_ALL_TODOS,
  GET_ONE_TODO,
  UPDATE_ONE_TODO,
  DELETE_ONE_TODO,
  GET_ALL_SUB_TODOS
} from "./actionTypes";

export const createTodo = todoData => dispatch => {
  axios
    .post("/api/task", todoData)
    .then(todo => {
      console.log(todo);
    })
    .catch(err => console.log(err));
};

export const getAllTodos = () => dispatch => {
  axios
    .get("/api/task")
    .then(todos => {
      dispatch({
        type: GET_ALL_TODOS,
        payload: todos.data
      });
    })
    .catch(err => console.log(err));
};

export const getOneTodo = id => dispatch => {
  axios
    .get(`/api/task/${id}`)
    .then(todo => {
      dispatch({
        type: GET_ONE_TODO,
        payload: todo.data
      });
      return todo.data;
    })
    .then(todo => {
      dispatch({
        type: GET_ALL_SUB_TODOS,
        payload: todo.subTask
      });
    })
    .catch(err => console.log(err));
};

export const updateOneTodo = (id, newTodo) => dispatch => {
  axios
    .put(`/api/task/${id}`, newTodo)
    .then(todo => {
      dispatch({
        type: UPDATE_ONE_TODO,
        payload: todo.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteOneTodo = id => dispatch => {
  axios
    .delete(`/api/task/${id}`)
    .then(todo => {
      dispatch({
        type: DELETE_ONE_TODO,
        payload: todo.data
      });
    })
    .catch(err => console.log(err));
};
