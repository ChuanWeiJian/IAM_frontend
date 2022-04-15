import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_ALL_LETTER_TEMPLATES =
  "LETTER-TEMPLATES-LIST GET_ALL_LETTER_TEMPLATES";
export const UPDATE_LETTER_TEMPLATES =
  "DELETE-LETTER-TEMPLATE UPDATE_LETTER_TEMPLATES";

export const getAllLetterTemplates = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, letterTemplates;
  try {
    //get all letter templates by district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/letters/Kluang`
    );

    letterTemplates = response.data.letterTemplates.map((template, index) => {
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

    dispatch({ type: GET_ALL_LETTER_TEMPLATES, payload: { letterTemplates } });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};

export const updateLetterTemplates = (templateId) => {
  return { type: UPDATE_LETTER_TEMPLATES, payload: templateId };
};
