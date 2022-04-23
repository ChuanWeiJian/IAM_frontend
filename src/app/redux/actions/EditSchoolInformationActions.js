import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const INITIALIZE_FORM = "EDIT-SCHOOL-INFORMATION INITIALIZE_FORM";
export const TOGGLE_SCHOOL_LIST = "EDIT-SCHOOL-INFORMATION TOGGLE_SCHOOL_LIST";

export const toggleSchoolListModal = (show) => {
  return {
    type: TOGGLE_SCHOOL_LIST,
    payload: show,
  };
};

export const initializeForm = (schoolId) => async (dispatch) => {
  let response, schools, selectedSchool;
  dispatch({ type: SET_LOADING, payload: true });
  try {
    //get all schools by district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/schools`
    );

    schools = response.data.schools;

    //find the school by id
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/schools/${schoolId}`
    );

    selectedSchool = response.data.school;

    dispatch({ type: INITIALIZE_FORM, payload: { schools, selectedSchool } });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
