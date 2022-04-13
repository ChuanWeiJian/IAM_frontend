import { SET_LOADING } from "../actions/LoadingActions";

const initialState = {
  loading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { loading: action.payload };
    default:
      return state;
  }
};

export default LoadingReducer;
