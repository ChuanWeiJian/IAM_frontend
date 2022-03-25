export const TOGGLE_EXAM_CENTER_LIST = "TOGGLE_EXAM_CENTER_LIST";
export const TOGGLE_ALERT = "TOGGLE_ALERT";
export const TOGGLE_ERROR = "TOGGLE_ERROR";
export const SET_EXAM_SECRETARY = "SET_EXAM_SECRETARY";
export const SET_ERROR = "SET_ERROR";

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const toggleAlert = (show) => {
  return {
    type: TOGGLE_ALERT,
    payload: show,
  };
};

export const toggleError = (show) => {
  return {
    type: TOGGLE_ERROR,
    payload: show,
  };
};

export const setExamSecretary = (examSecretary) => {
  return {
    type: SET_EXAM_SECRETARY,
    payload: examSecretary,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
