import {
  GET_ALL_LETTER_TEMPLATES,
  UPDATE_LETTER_TEMPLATES,
} from "../actions/LetterTemplatesListActions";

const initialState = {
  letterTemplates: [],
};

const LetterTemplatesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LETTER_TEMPLATES:
      return { ...state, letterTemplates: action.payload.letterTemplates };
    case UPDATE_LETTER_TEMPLATES:
      return {
        ...state,
        letterTemplates: state.letterTemplates.filter(
          (letter) => letter.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default LetterTemplatesListReducer;
