import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_SCHOOL_LIST_DATA = "SCHOOL-LIST GET_SCHOOL_LIST_DATA";
export const TOGGLE_FORM = "SCHOOL-LIST TOGGLE_FORM";
export const SET_SELECTED_INDEX = "SCHOOL-LIST SET_SELECTED_INDEX";
export const TOGGLE_EXAM_CENTER_LIST = "SCHOOL-LIST TOGGLE_EXAM_CENTER_LIST";
export const ADD_NEW_EXAM_CENTER = "SCHOOL-LIST ADD_NEW_EXAM_CENTER";

export const getSchoolListData = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, schools, examCenters;
  try {
    //get all schools by district without resolved fields
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/schools`
    );

    //add in actions and index to each school data, for table configuration
    schools = response.data.schools.map((school, index) => {
      let actions = {
        view: "/school/" + school.id,
        edit: "/school/edit/" + school.id,
      };

      return { ...school, actions: actions, index: index + 1 };
    });

    //get exam centers with resolved schools
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/examcenters/school`
    );

    examCenters = response.data.examCenters;

    dispatch({ type: GET_SCHOOL_LIST_DATA, payload: { schools, examCenters } });
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

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const addNewExamCenter = (index, examCenter) => {
  return {
    type: ADD_NEW_EXAM_CENTER,
    payload: { index, examCenter },
  };
};
