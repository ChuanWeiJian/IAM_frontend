import {
  NEW_TOGGLE_EXAM_CENTER_LIST,
  NEW_TOGGLE_ALERT,
  NEW_TOGGLE_ERROR,
  NEW_SET_EXAM_SECRETARY,
  NEW_SET_ERROR,
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
    case NEW_TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    case NEW_TOGGLE_ALERT:
      return { ...state, showAlert: action.payload };
    case NEW_TOGGLE_ERROR:
      return { ...state, showError: action.payload };
    case NEW_SET_EXAM_SECRETARY:
      return { ...state, examSecretary: action.payload };
    case NEW_SET_ERROR:
      return { ...state, submitError: action.payload };
    default:
      return state;
  }
};

export default NewExamCenterReducer;
