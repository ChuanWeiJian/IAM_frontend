import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_ALL_EXAM_CENTERS =
  "NEW ASSIGNMENT TASK - GET_ALL_EXAM_CENTERS";

export const getAllExamCenters = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, examCenters;
  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/examcenters/school/Kluang`
    );

    examCenters = response.data.examCenters;
    dispatch({ type: GET_ALL_EXAM_CENTERS, payload: examCenters });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
