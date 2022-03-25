export const INITIALIZE_LETTER_TEMPLATE_FORM = "INITIALIZE_LETTER_TEMPLATE_FORM";

export const initializeForm = (data) => {
  return {
    type: INITIALIZE_LETTER_TEMPLATE_FORM,
    payload: data,
  };
};
