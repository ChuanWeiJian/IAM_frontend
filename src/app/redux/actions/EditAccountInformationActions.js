import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const INITIALIZE_FORM = "EDIT-ACCOUNT-INFORMATION INITIALIZE_FORM";

export const initializeForm = (accountId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, account;
  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/officer/${accountId}`
    );

    account = response.data.account;
    dispatch({ type: INITIALIZE_FORM, payload: account });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
