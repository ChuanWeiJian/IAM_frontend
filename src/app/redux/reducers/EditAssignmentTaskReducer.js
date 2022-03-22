import { INITIALIZE_ASSIGNMENT_TASK_FORM } from "../actions/EditAssignmentTaskActions";

const EditAssignmentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_ASSIGNMENT_TASK_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default EditAssignmentTaskReducer;
