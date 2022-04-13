import { SET_ERROR, RESET_ERROR } from "../actions/ErrorModalActions";

const initialState = {
  error: null,
};

const ErrorModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default ErrorModalReducer;
