export const INITIALIZE_ASSIGNMENT_RESULT_FORM = "INITIALIZE_ASSIGNMENT_RESULT_FORM";

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_ASSIGNMENT_RESULT_FORM,
    payload: data,
  };
};
