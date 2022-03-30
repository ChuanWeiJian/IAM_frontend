import { GET_COMPILE_LETTER_INFO } from "../actions/CompileLetterActions";

const initialState = {
  assignmentTask: {},
  assignmentResult: {},
  letterTemplates: [],
};

const CompileLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPILE_LETTER_INFO:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
        assignmentResult: action.payload.resolvedResult,
        letterTemplates: action.payload.letterTemplates,
      };
    default:
      return state;
  }
};

export default CompileLetterReducer;
