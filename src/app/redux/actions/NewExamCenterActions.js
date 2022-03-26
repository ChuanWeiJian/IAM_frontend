export const NEW_TOGGLE_EXAM_CENTER_LIST = "NEW_TOGGLE_EXAM_CENTER_LIST";
export const NEW_TOGGLE_ALERT = "NEW_TOGGLE_ALERT";
export const NEW_TOGGLE_ERROR = "NEW_TOGGLE_ERROR";
export const NEW_SET_EXAM_SECRETARY = "NEW_SET_EXAM_SECRETARY";
export const NEW_SET_ERROR = "NEW_SET_ERROR";

export const toggleExamCenterListModal = (show) => {
  return {
    type: NEW_TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const toggleAlert = (show) => {
  return {
    type: NEW_TOGGLE_ALERT,
    payload: show,
  };
};

export const toggleError = (show) => {
  return {
    type: NEW_TOGGLE_ERROR,
    payload: show,
  };
};

export const setExamSecretary = (examSecretary) => {
  return {
    type: NEW_SET_EXAM_SECRETARY,
    payload: examSecretary,
  };
};

export const setError = (error) => {
  return {
    type: NEW_SET_ERROR,
    payload: error,
  };
};
