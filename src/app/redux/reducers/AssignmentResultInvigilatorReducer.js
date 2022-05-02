import { GET_ALL_ASSIGNMENT_RESULTS } from "../actions/AssignmentResultInvigilatorActions";

const initialState = {
  profile: {},
};

const AssignmentResultInvigilatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ASSIGNMENT_RESULTS:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default AssignmentResultInvigilatorReducer;
