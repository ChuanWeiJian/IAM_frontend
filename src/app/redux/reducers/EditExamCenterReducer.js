import {
  TOGGLE_EXAM_CENTER_LIST,
  INITIALIZE_FORM,
} from "../actions/EditExamCenterActions";

const initialState = {
  showModal: false,
  selectedExamCenter: {school:{}},
  examCenters: [],
};

const EditExamCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXAM_CENTER_LIST:
      return {
        ...state,
        showModal: action.payload,
      };
    case INITIALIZE_FORM:
      return {
        ...state,
        selectedExamCenter: action.payload.selectedExamCenter,
        examCenters: action.payload.examCenters,
      };
    default:
      return state;
  }
};

export default EditExamCenterReducer;
