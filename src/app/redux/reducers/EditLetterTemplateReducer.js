import { INITIALIZE_FORM } from "../actions/EditLetterTemplateActions";

const initialState = {
  letterTemplate: {},
};

const EditLetterTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return { ...state, letterTemplate: action.payload };
    default:
      return state;
  }
};

export default EditLetterTemplateReducer;
