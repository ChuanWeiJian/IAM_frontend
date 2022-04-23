import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  RESET_PASSWORD,
  RESET_LOGIN_ERROR,
  LOGOUT,
  AUTO_LOGIN,
} from "../actions/LoginActions";

const initialState = {
  success: false,
  loading: false,
  error: "",
};

const LoginReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        success: true,
        loading: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    }
    case RESET_LOGIN_ERROR: {
      return { ...state, error: "" };
    }
    case LOGOUT:
      return { ...state, success: false, loading: false, error: "" };
    case AUTO_LOGIN:
      return { ...state, success: true };
    default: {
      return state;
    }
  }
};

export default LoginReducer;
