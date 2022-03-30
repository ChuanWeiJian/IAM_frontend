import { GET_LETTER_TEMPLATE_BY_ID } from "../actions/LetterTemplateContentActions";

const initialState = {
  letterTemplate: {},
};

const LetterTemplateContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LETTER_TEMPLATE_BY_ID:
      return { ...state, letterTemplate: action.payload };
    default:
      return state;
  }
};

export default LetterTemplateContentReducer;