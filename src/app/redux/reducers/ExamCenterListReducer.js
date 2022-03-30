import { GET_ALL_EXAM_CENTERS } from "../actions/ExamCenterListActions";

const initialState = {
  examCenters: [],
};

const ExamCenterListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EXAM_CENTERS:
      return { ...state, examCenters: action.payload };
    default:
      return state;
  }
};

export default ExamCenterListReducer;
