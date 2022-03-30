import { INITIALIZE_ASSIGNMENT_RESULT_FORM } from "../actions/EditAssignmentResultActions";

const initialState = {
  assignmentTask: {},
  assignmentResult: {},
  invigilators: [],
};

const EditAssignmentResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_ASSIGNMENT_RESULT_FORM:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
        assignmentResult: action.payload.resolvedResult,
        invigilators: action.payload.involvedInvigilators,
      };
    default:
      return state;
  }
};

export default EditAssignmentResultReducer;
