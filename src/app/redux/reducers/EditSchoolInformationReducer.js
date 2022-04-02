import {
  INITIALIZE_FORM,
  TOGGLE_SCHOOL_LIST,
} from "../actions/EditSchoolInformationActions";

const initialState = {
  schools: [],
  selectedSchool: {},
  showModal: false,
};

const EditSchoolInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return {
        ...state,
        schools: action.payload.schools,
        selectedSchool: action.payload.selectedSchool,
      };
    case TOGGLE_SCHOOL_LIST:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};

export default EditSchoolInformationReducer;
