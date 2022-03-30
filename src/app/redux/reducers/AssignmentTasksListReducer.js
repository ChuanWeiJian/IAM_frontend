import { GET_ALL_ASSIGNMENT_TASKS } from "../actions/AssignmentTasksListActions";

const initialState = {
  assignmentTasks: [],
};

const AssignmentTasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ASSIGNMENT_TASKS:
      return { ...state, assignmentTasks: action.payload };
    default:
      return state;
  }
};

export default AssignmentTasksListReducer;
