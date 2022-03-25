import { INITIALIZE_LETTER_TEMPLATE_FORM } from "../actions/EditLetterTemplateActions";

const EditLetterTemplateReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_LETTER_TEMPLATE_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default EditLetterTemplateReducer;
