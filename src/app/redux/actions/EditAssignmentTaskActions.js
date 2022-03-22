export const INITIALIZE_FORM = "INITIALIZE_FORM";

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_FORM,
    payload: data,
  };
};
