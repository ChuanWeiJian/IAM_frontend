import { GET_ASSIGNMENT_TASK_INFO } from "../actions/AssignmentTaskInfoActions";

const initialState = {
  assignmentTask: {},
  involvedExamCenters: [],
  examCenterData: []
};

const AssignmentTaskInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_TASK_INFO:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
        involvedExamCenters: action.payload.resolvedExamCenters,
        examCenterData: action.payload.collectedExamCenterData
      };
    default:
      return state;
  }
};

export default AssignmentTaskInfoReducer;
