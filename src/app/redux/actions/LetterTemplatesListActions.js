import { LetterTemplates } from "fake-db/static_data/LetterTemplate";

export const GET_ALL_LETTER_TEMPLATES =
  "LETTER-TEMPLATES-LIST GET_ALL_LETTER_TEMPLATES";

export const getAllLetterTemplates = () => {
  const resolvedLetterTemplates = LetterTemplates.map((template, index) => {
    let actions = {
      view: "/letter/" + template.id,
      edit: "/letter/edit/" + template.id,
      delete: "/letter/delete/" + template.id,
    };

    return {
      ...template,
      actions: actions,
      index: index + 1,
    };
  });

  return {
    type: GET_ALL_LETTER_TEMPLATES,
    payload: { letterTemplates: resolvedLetterTemplates },
  };
};
