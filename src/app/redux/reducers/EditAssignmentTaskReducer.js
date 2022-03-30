import { INITIALIZE_ASSIGNMENT_TASK_FORM } from "../actions/EditAssignmentTaskActions";

const initialState = {
  assignmentTask: {},
  examCenters: [],
};

const EditAssignmentTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_ASSIGNMENT_TASK_FORM:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
        examCenters: action.payload.examCenters,
      };
    default:
      return state;
  }
};

export default EditAssignmentTaskReducer;
