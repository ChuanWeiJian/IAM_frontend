import { Schools } from "fake-db/static_data/ExamCenter";
import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING, setFetchingLoading } from "./LoadingActions";

export const GET_ALL_SCHOOLS = "NEW-SCHOOL GET_ALL_SCHOOLS";
export const TOGGLE_SCHOOL_LIST = "NEW-SCHOOL TOGGLE_SCHOOL_LIST";

export const toggleSchoolListModal = (show) => {
  return {
    type: TOGGLE_SCHOOL_LIST,
    payload: show,
  };
};

export const getAllSchools = () => async (dispatch) => {
  //get all schools
  let response;
  dispatch({ type: SET_LOADING, payload: true });
  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/schools/Kluang`
    );
    dispatch({ type: GET_ALL_SCHOOLS, payload: response.data.schools });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
