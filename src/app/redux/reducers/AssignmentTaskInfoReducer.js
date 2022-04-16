import { GET_ASSIGNMENT_TASK_INFO } from "../actions/AssignmentTaskInfoActions";

const initialState = {
  assignmentTask: {},
};

const AssignmentTaskInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_TASK_INFO:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
      };
    default:
      return state;
  }
};

export default AssignmentTaskInfoReducer;
