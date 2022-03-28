export const NEW_TOGGLE_EXAM_CENTER_LIST = "NEW_TOGGLE_EXAM_CENTER_LIST";

export const toggleExamCenterListModal = (show) => {
  return {
    type: NEW_TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};
