import { INITIALIZE_ASSIGNMENT_RESULT_FORM } from "../actions/EditAssignmentResultActions";

const EditAssignmentResultReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_ASSIGNMENT_RESULT_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default EditAssignmentResultReducer;
