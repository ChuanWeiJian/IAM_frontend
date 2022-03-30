import { GET_ALL_EXAM_CENTERS } from "../actions/NewAssignmentTaskActions";

const initialState = {
  examCenters: [],
};

const NewAssignmentTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EXAM_CENTERS:
      return { ...state, examCenters: action.payload };
    default:
      return state;
  }
};

export default NewAssignmentTaskReducer;
