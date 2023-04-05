import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from "../constants/todoConstants";

export const toDoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      const todo = action.payload;
      return { ...state, todos: [...state.todos, todo] };
    case REMOVE_TODO_ITEM:
      const index = action.payload;
      const updateTodo = state.todos.filter((todo, ind) => {
        return ind !== index;
      });
      return { ...state, todos: [...updateTodo] };
    default:
      return state;
  }
};
