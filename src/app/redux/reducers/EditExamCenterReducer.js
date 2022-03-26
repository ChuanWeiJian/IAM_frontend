import {
  EDIT_TOGGLE_EXAM_CENTER_LIST,
  EDIT_TOGGLE_ALERT,
  EDIT_TOGGLE_ERROR,
  EDIT_SET_ERROR,
  INITIALIZE_FORM,
} from "../actions/EditExamCenterActions";

const initialState = {
  mechanism: {
    showModal: false,
    showAlert: false,
    showError: false,
    submitError: {},
  },
  initialValues: {},
};

const EditExamCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TOGGLE_EXAM_CENTER_LIST:
      return {
        ...state,
        mechanism: { ...state.mechanism, showModal: action.payload },
      };
    case EDIT_TOGGLE_ALERT:
      return {
        ...state,
        mechanism: { ...state.mechanism, showAlert: action.payload },
      };
    case EDIT_TOGGLE_ERROR:
      return {
        ...state,
        mechanism: { ...state.mechanism, showError: action.payload },
      };
    case EDIT_SET_ERROR:
      return {
        ...state,
        mechanism: { ...state.mechanism, submitError: action.payload },
      };
    case INITIALIZE_FORM:
      return { ...state, initialValues: action.payload };
    default:
      return state;
  }
};

export default EditExamCenterReducer;
