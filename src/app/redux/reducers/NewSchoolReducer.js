import {
  GET_ALL_SCHOOLS,
  TOGGLE_SCHOOL_LIST,
} from "../actions/NewSchoolActions";

const initialState = {
  schools: [],
  showModal: false,
};

const NewSchoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SCHOOL_LIST:
      return { ...state, showModal: action.payload };
    case GET_ALL_SCHOOLS:
      return { ...state, schools: action.payload };
    default:
      return state;
  }
};

export default NewSchoolsReducer;
