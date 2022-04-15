import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_LETTER_TEMPLATE_BY_ID =
  "LETTER-TEMPLATE-CONTENT GET_LETTER_TEMPLATE_BY_ID";

export const getLetterTemplateById = (templateId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, letterTemplate;
  try {
    //get letter template by id and district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/letters/${templateId}/Kluang`
    );

    letterTemplate = response.data.letterTemplate;
    dispatch({ type: GET_LETTER_TEMPLATE_BY_ID, payload: letterTemplate });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
