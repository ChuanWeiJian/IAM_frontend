import {
  TOGGLE_EXAM_CENTER_LIST,
  GET_ALL_EXAM_CENTERS,
} from "../actions/NewExamCenterActions";

const initialState = {
  examCenters: [],
  showModal: false,
};

const NewExamCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    case GET_ALL_EXAM_CENTERS:
      return { ...state, examCenters: action.payload };
    default:
      return state;
  }
};

export default NewExamCenterReducer;
