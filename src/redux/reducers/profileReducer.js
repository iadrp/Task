import { ADD_PROFILE_INFO } from "../constants/profleConstants";

export const profileReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case ADD_PROFILE_INFO:
      return { ...state, profile: { ...action.payload } };
    default:
      return state;
  }
};
