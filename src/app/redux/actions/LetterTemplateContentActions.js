import { LetterTemplates } from "fake-db/static_data/LetterTemplate";

export const GET_LETTER_TEMPLATE_BY_ID =
  "LETTER-TEMPLATE-CONTENT GET_LETTER_TEMPLATE_BY_ID";

export const getLetterTemplateById = (templateId) => {
  //get letter template by id and district
  const letterTemplate = LetterTemplates.find(
    (template) => template.id === templateId
  );

  return {
    type: GET_LETTER_TEMPLATE_BY_ID,
    payload: letterTemplate,
  };
};
