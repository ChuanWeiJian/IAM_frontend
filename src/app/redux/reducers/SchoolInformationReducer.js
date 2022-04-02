import {
  GET_SCHOOL_INFORMATION_BY_ID,
  TOGGLE_FORM,
  TOGGLE_EXAM_CENTER_LIST,
  INITIALIZE_FORM,
} from "../actions/SchoolInformationActions";

const initialState = {
  school: {},
  examCenters: [],
  showForm: false,
  showModal: false,
  selectedIndex: 0,
};

const SchoolInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL_INFORMATION_BY_ID:
      return {
        ...state,
        school: action.payload.school,
        examCenters: action.payload.examCenters,
      };
    case TOGGLE_FORM:
      return { ...state, showForm: action.payload };
    case TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    case INITIALIZE_FORM:
      return { ...state, selectedIndex: action.payload };
    default:
      return state;
  }
};

export default SchoolInformationReducer;