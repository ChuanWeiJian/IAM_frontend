export const EDIT_TOGGLE_EXAM_CENTER_LIST = "EDIT_TOGGLE_EXAM_CENTER_LIST";
export const INITIALIZE_FORM = "INITIALIZE_EXAM_CENTER_FORM";

export const toggleExamCenterListModal = (show) => {
  return {
    type: EDIT_TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_FORM,
    payload: data,
  };
};
