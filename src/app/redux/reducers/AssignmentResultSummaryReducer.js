import { GET_ASSIGNMENT_RESULT_SUMMARY_INFO } from "../actions/AssignmentResultSummaryActions";

const initialState = {
  result: {},
};

const AssignmentResultSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_RESULT_SUMMARY_INFO:
      return {
        ...state,
        result: action.payload.assignmentResult,
      };
    default:
      return state;
  }
};

export default AssignmentResultSummaryReducer;
