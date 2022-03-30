import { LetterTemplates } from "fake-db/static_data/LetterTemplate";

export const INITIALIZE_FORM = "EDIT-LETTER-TEMPLATE INITIALIZE_FORM";

export const initializeForm = (templateId) => {
  const letterTemplate = LetterTemplates.find(
    (template) => template.id === templateId
  );
  return {
    type: INITIALIZE_FORM,
    payload: letterTemplate,
  };
};
