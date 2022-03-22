import { INITIALIZE_FORM } from "../actions/EditAssignmentTaskActions";

const EditAssignmentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default EditAssignmentTaskReducer;
