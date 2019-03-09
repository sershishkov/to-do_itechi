import {
  GET_ALL_SUB_TODOS,
  DELETE_ONE_SUB_TODO,
  ADD_ONE_SUB_TODO,
  CLEAR_ALL_SUB_TODO
} from "../actions/actionTypes";

const initialState = {
  subTodos: [],
  subOneTodo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE_SUB_TODO:
      return {
        ...state,
        subTodos: [...state.subTodos, action.payload]
      };
    case GET_ALL_SUB_TODOS:
      return {
        ...state,
        subTodos: action.payload
      };
    case DELETE_ONE_SUB_TODO:
      return {
        ...state,
        subTodos: state.subTodos.filter(todo => {
          return todo.id !== action.payload;
        })
      };

    case CLEAR_ALL_SUB_TODO:
      return {
        ...state,
        subTodos: action.payload
      };

    default:
      return state;
  }
}
