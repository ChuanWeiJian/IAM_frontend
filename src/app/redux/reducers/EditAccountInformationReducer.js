import { INITIALIZE_FORM } from "../actions/EditAccountInformationActions";

const initialState = {
  account: {},
};

const EditAccountInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

export default EditAccountInformationReducer;
