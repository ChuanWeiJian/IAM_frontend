import {
  GET_ALL_ASSIGNMENT_TASKS,
  UPDATE_ASSIGNMENT_TASKS_LIST,
} from "../actions/AssignmentTasksListActions";

const initialState = {
  assignmentTasks: [],
};

const AssignmentTasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ASSIGNMENT_TASKS:
      return { ...state, assignmentTasks: action.payload };
    case UPDATE_ASSIGNMENT_TASKS_LIST:
      return {
        ...state,
        assignmentTasks: state.assignmentTasks.filter((task) => {
          return task.id != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default AssignmentTasksListReducer;
