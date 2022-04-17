import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const INITIALIZE_ASSIGNMENT_RESULT_FORM =
  "EDIT-ASSIGNMENT-RESULT INITIALIZE_ASSIGNMENT_RESULT_FORM";

export const initializeForm = (role, taskId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, assignmentResult;

  try {
    //get assignment result by task id and role with all fields resolved
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/results/${taskId}/${role}`
    );

    assignmentResult = response.data.assignmentResult;
    let involvedInvigilators = [];

    assignmentResult.results.forEach((result) => {
      result.invigilators.forEach((invigilator) =>
        involvedInvigilators.push(invigilator)
      );
    });

    involvedInvigilators.sort((a, b) => {
      if (a.user.school.schoolCode > b.user.school.schoolCode) {
        return 1;
      } else if (a.user.school.schoolCode < b.user.school.schoolCode) {
        return -1;
      } else {
        return 0;
      }
    });

    dispatch({
      type: INITIALIZE_ASSIGNMENT_RESULT_FORM,
      payload: {
        assignmentResult,
        involvedInvigilators,
      },
    });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
