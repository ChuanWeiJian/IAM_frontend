import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_DASHBOARD_INFO = "GET_DASHBOARD_INFO";
export const RESET_DASHBOARD_DATA = "RESET_DASHBOARD_DATA";

export const getDashboardInfo = (userGroup) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response;
  try {
    switch (userGroup) {
      case "Admin":
        response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users/dashboard`
        );

        dispatch({
          type: GET_DASHBOARD_INFO,
          payload: { data: response.data.data },
        });
        break;
      case "Officer":
        response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/assignments/dashboard/officer`
        );

        dispatch({
          type: GET_DASHBOARD_INFO,
          payload: { data: response.data.data },
        });
        break;
      default:
        response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/results-invigilator/dashboard/teacher`
        );

        dispatch({
          type: GET_DASHBOARD_INFO,
          payload: { data: response.data.data },
        });
        break;
    }
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const resetDashboardData = () => {
  return { type: RESET_DASHBOARD_DATA };
};
