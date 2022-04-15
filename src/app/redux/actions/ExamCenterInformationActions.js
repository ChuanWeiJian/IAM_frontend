import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_EXAM_CENTER_INFORMATION =
  "EXAM-CENTER-INFORMATION GET_EXAM_CENTER_INFORMATION";

export const getExamCenterInformation = (centerId) => async (dispatch) => {
  let response, examCenter;
  dispatch({ type: SET_LOADING, payload: true });
  try {
    //get exam center by id & district with resolved school & assignment tasks
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/examcenters/resolve/${centerId}/Kluang`
    );

    examCenter = response.data.examCenter;
    dispatch({ type: GET_EXAM_CENTER_INFORMATION, payload: { examCenter } });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
