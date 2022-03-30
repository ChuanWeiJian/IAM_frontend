import { GET_EXAM_CENTER_INFORMATION } from "../actions/ExamCenterInformationActions";

const initialState = {
  examCenter: {},
  assignmentTasks: [],
};

const ExamCenterInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAM_CENTER_INFORMATION:
      return {
        ...state,
        examCenter: action.payload.examCenter,
        assignmentTasks: action.payload.assignmentTasks,
      };
    default:
      return state;
  }
};

export default ExamCenterInformationReducer;
