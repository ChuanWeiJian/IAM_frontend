export const EDIT_TOGGLE_EXAM_CENTER_LIST = "EDIT_TOGGLE_EXAM_CENTER_LIST";
export const EDIT_TOGGLE_ALERT = "EDIT_TOGGLE_ALERT";
export const EDIT_TOGGLE_ERROR = "EDIT_TOGGLE_ERROR";
export const EDIT_SET_ERROR = "EDIT_SET_ERROR";
export const INITIALIZE_FORM = "INITIALIZE_EXAM_CENTER_FORM";

export const toggleExamCenterListModal = (show) => {
  return {
    type: EDIT_TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const toggleAlert = (show) => {
  return {
    type: EDIT_TOGGLE_ALERT,
    payload: show,
  };
};

export const toggleError = (show) => {
  return {
    type: EDIT_TOGGLE_ERROR,
    payload: show,
  };
};

export const setError = (error) => {
  return {
    type: EDIT_SET_ERROR,
    payload: error,
  };
};

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_FORM,
    payload: data,
  };
};
