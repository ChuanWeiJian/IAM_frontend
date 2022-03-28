import {
  SET_SUBMIT_LOADING,
  SET_FETCHING_LOADING,
} from "../actions/LoadingActions";

const initialState = {
  isSubmitLoading: false,
  isFetchingLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBMIT_LOADING:
      return { ...state, isSubmitLoading: action.payload };
    case SET_FETCHING_LOADING:
      return { ...state, isFetchingLoading: action.payload };
    default:
      return state;
  }
};

export default LoadingReducer;
