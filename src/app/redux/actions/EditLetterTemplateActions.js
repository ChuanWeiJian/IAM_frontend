import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const INITIALIZE_FORM = "EDIT-LETTER-TEMPLATE INITIALIZE_FORM";

export const initializeForm = (templateId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, letterTemplate;
  try {
    //get the letter template by templateId
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/letters/${templateId}`
    );
    letterTemplate = response.data.letterTemplate;
    dispatch({ type: INITIALIZE_FORM, payload: letterTemplate });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
