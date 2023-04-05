import { ADD_PROFILE_INFO } from "../constants/profleConstants";

export const addProfileAction = (firstName, lastName, email) => (dispatch) => {
  dispatch({
    type: ADD_PROFILE_INFO,
    payload: {
      firstName,
      lastName,
      email,
    },
  });
};
