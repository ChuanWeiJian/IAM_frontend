import { GET_SCHOOL_INFORMATION_BY_ID } from "../actions/SchoolInformationActions";

const initialState = {
  school: {},
};

const SchoolInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL_INFORMATION_BY_ID:
      return { ...state, school: action.payload };
    default:
      return state;
  }
};

export default SchoolInformationReducer;