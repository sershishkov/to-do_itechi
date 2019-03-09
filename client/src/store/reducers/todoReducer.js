import {
  GET_ALL_TODOS,
  GET_ONE_TODO,
  UPDATE_ONE_TODO,
  DELETE_ONE_TODO
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  oneTodo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_ONE_TODO:
      return {
        ...state,
        oneTodo: action.payload
      };

    case UPDATE_ONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? (todo = action.payload) : todo
        )
      };
    case DELETE_ONE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo._id !== action.payload;
        })
      };

    default:
      return state;
  }
}
