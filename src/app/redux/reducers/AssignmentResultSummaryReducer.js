import { GET_ASSIGNMENT_RESULT_SUMMARY_INFO } from "../actions/AssignmentResultSummaryActions";

const initialState = {
  assignmentTask: {},
  result: {},
  status: "",
};

const AssignmentResultSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_RESULT_SUMMARY_INFO:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
        result: action.payload.resolvedResult,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default AssignmentResultSummaryReducer;
