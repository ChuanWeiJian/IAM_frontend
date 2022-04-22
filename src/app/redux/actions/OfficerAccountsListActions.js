import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_ALL_OFFICER_ACCOUNTS =
  "OFFICER-ACCOUNTS-LIST GET_ALL_OFFICER_ACCOUNTS";
export const TOGGLE_FORM = "CHANGE-PASSWORD TOGGLE_FORM";
export const SET_SELECTED_INDEX = "CHANGE-PASSWORD SET_SELECTED_INDEX";
export const REMOVE_ACCOUNT = "DELETE-ACCOUNT REMOVE_ACCOUNT";

export const getAllOfficerAccounts = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, accounts;
  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/officer`
    );

    accounts = response.data.accounts.map((account, index) => {
      return {
        ...account,
        actions: {
          edit: "/user/edit/" + account.id,
        },
        index: index + 1,
      };
    });
    dispatch({ type: GET_ALL_OFFICER_ACCOUNTS, payload: accounts });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const toggleForm = (show) => {
  return {
    type: TOGGLE_FORM,
    payload: show,
  };
};

export const setSelectedIndex = (index) => {
  return {
    type: SET_SELECTED_INDEX,
    payload: index,
  };
};

export const removeAccount = (accountId) => {
  return {
    type: REMOVE_ACCOUNT,
    payload: accountId,
  };
};
