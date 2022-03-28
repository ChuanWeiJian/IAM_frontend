import {
  EDIT_TOGGLE_EXAM_CENTER_LIST,
  INITIALIZE_FORM,
} from "../actions/EditExamCenterActions";

const initialState = {
  mechanism: {
    showModal: false,
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
    case INITIALIZE_FORM:
      return { ...state, initialValues: action.payload };
    default:
      return state;
  }
};

export default EditExamCenterReducer;
