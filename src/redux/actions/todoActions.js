import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from "../constants/todoConstants";

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO_ITEM,
    payload: todo,
  });
};

export const removeTodo = (index) => (dispatch) => {
  dispatch({
    type: REMOVE_TODO_ITEM,
    payload: index,
  });
};
