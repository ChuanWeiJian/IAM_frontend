import { INITIALIZE_ASSIGNMENT_RESULT_FORM } from "../actions/EditAssignmentResultActions";

const initialState = {
  assignmentResult: {},
  invigilators: [],
};

const EditAssignmentResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_ASSIGNMENT_RESULT_FORM:
      return {
        ...state,
        assignmentResult: action.payload.assignmentResult,
        invigilators: action.payload.involvedInvigilators,
      };
    default:
      return state;
  }
};

export default EditAssignmentResultReducer;
