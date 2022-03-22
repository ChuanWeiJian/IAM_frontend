export const INITIALIZE_ASSIGNMENT_TASK_FORM = "INITIALIZE_ASSIGNMENT_TASK_FORM";

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_ASSIGNMENT_TASK_FORM,
    payload: data,
  };
};
