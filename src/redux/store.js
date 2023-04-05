import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { toDoReducer } from "./reducers/todoReducer";
import { profileReducer } from "./reducers/profileReducer";
const reducers = combineReducers({
  todoR: toDoReducer,
  profile: profileReducer,
});

const initialState = {
  todoR: { todos: [] },
  profile: {},
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
