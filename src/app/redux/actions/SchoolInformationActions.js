import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_SCHOOL_INFORMATION_BY_ID =
  "SCHOOL-INFORMATION GET_SCHOOL_INFORMATION_BY_ID";
export const TOGGLE_FORM = "EDIT-EXAM-CENTER TOGGLE_FORM";
export const TOGGLE_EXAM_CENTER_LIST =
  "EDIT-EXAM-CENTER TOGGLE_EXAM_CENTER_LIST";
export const INITIALIZE_FORM = "EDIT-EXAM-CENTER INITIALIZE_FORM";
export const UPDATE_EXAM_CENTER = "EDIT-EXAM-CENTER UPDATE_EXAM_CENTER";

export const getSchoolInformationById = (schoolId) => async (dispatch) => {
  let response, school, examCenters;
  dispatch({ type: SET_LOADING, payload: true });
  // get school by id & district with resolved exam centers
  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/schools/examcenters/${schoolId}`
    );

    // resolve actions field after retrieved data
    school = {
      ...response.data.school,
      examCenters: response.data.school.examCenters.map((center, index) => {
        return {
          ...center,
          actions: {
            view: "/examcenter/" + center.id,
          },
          index: index + 1,
        };
      }),
    };

    //get all registered exam centers by district with resolved school field
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/examcenters/school`
    );

    examCenters = response.data.examCenters;

    dispatch({
      type: GET_SCHOOL_INFORMATION_BY_ID,
      payload: { school, examCenters },
    });
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

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const initializeForm = (index) => {
  return {
    type: INITIALIZE_FORM,
    payload: index,
  };
};

export const updateExamCenter = (index, examCenter) => {
  return {
    type: UPDATE_EXAM_CENTER,
    payload: { index, examCenter },
  };
};
