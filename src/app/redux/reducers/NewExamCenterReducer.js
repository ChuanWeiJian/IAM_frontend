import {
  TOGGLE_EXAM_CENTER_LIST,
  TOGGLE_ALERT,
  TOGGLE_ERROR,
  SET_EXAM_SECRETARY,
  SET_ERROR,
} from "../actions/NewExamCenterActions";

const initialState = {
  showModal: false,
  showAlert: false,
  showError: false,
  examSecretary: {},
  submitError: {},
};

const NewExamCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    case TOGGLE_ALERT:
      return { ...state, showAlert: action.payload };
    case TOGGLE_ERROR:
      return { ...state, showError: action.payload };
    case SET_EXAM_SECRETARY:
      return { ...state, examSecretary: action.payload };
    case SET_ERROR:
      return { ...state, submitError: action.payload };
    default:
      return state;
  }
};

export default NewExamCenterReducer;
