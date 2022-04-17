import { GET_COMPILE_LETTER_INFO } from "../actions/CompileLetterActions";

const initialState = {
  assignmentResult: {},
  letterTemplates: [],
};

const CompileLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPILE_LETTER_INFO:
      return {
        ...state,
        assignmentResult: action.payload.assignmentResult,
        letterTemplates: action.payload.letterTemplates,
      };
    default:
      return state;
  }
};

export default CompileLetterReducer;
