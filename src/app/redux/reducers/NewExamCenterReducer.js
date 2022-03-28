import { NEW_TOGGLE_EXAM_CENTER_LIST } from "../actions/NewExamCenterActions";

const initialState = {
  showModal: false,
};

const NewExamCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TOGGLE_EXAM_CENTER_LIST:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};

export default NewExamCenterReducer;
