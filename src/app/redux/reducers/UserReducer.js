import { SET_USER_DATA, USER_LOGGED_OUT } from "../actions/UserActions";

const initialState = {};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...action.data,
      };
    }
    case USER_LOGGED_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
