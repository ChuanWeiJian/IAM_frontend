import {
  GET_SCHOOL_INFORMATION_BY_ID,
  TOGGLE_FORM,
  TOGGLE_EXAM_CENTER_LIST,
  INITIALIZE_FORM,
  UPDATE_EXAM_CENTER,
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
    case UPDATE_EXAM_CENTER:
      const index = state.school.examCenters[state.selectedIndex].index;
      const actions = state.school.examCenters[state.selectedIndex].actions;
      const resolvedExamCenter = {
        ...action.payload.examCenter,
        school: state.school.id,
        index: index,
        actions: actions,
      };

      return {
        ...state,
        examCenters: state.examCenters.map((center) =>
          center.id == action.payload.examCenter.id
            ? action.payload.examCenter
            : center
        ),
        school: {
          ...state.school,
          examCenters: state.school.examCenters.map((center, index) => {
            if (index == state.selectedIndex) {
              return resolvedExamCenter;
            } else {
              return center;
            }
          }),
        },
      };
    default:
      return state;
  }
};

export default SchoolInformationReducer;
