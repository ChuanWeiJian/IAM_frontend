import {
  GET_SCHOOL_LIST_DATA,
  TOGGLE_FORM,
  SET_SELECTED_INDEX,
  TOGGLE_EXAM_CENTER_LIST,
  ADD_NEW_EXAM_CENTER,
} from "../actions/SchoolListActions";

const initialState = {
  schools: [],
  examCenters: [],
  showForm: false,
  showModal: false,
  selectedIndex: 0,
};

const SchoolListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL_LIST_DATA:
      return {
        ...state,
        schools: action.payload.schools,
        examCenters: action.payload.examCenters,
      };
    case TOGGLE_FORM:
      return { ...state, showForm: action.payload };
    case SET_SELECTED_INDEX:
      return { ...state, selectedIndex: action.payload };
    case TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    case ADD_NEW_EXAM_CENTER:
      return {
        ...state,
        schools: state.schools.map((school, index) => {
          if (index == state.selectedIndex) {
            return {
              ...school,
              examCenters: [
                ...school.examCenters,
                action.payload.examCenter.id,
              ],
            };
          } else {
            return school;
          }
        }),
        examCenters: [...state.examCenters, action.payload.examCenter],
      };
    default:
      return state;
  }
};

export default SchoolListReducer;
