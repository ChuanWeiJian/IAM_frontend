import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const INITIALIZE_ASSIGNMENT_TASK_FORM =
  "EDIT-ASSIGNMENT-TASK INITIALIZE_ASSIGNMENT_TASK_FORM";

export const initializeForm = (taskId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, assignmentTask, examCenters;
  try {
    //get assignment by id and district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/assignments/${taskId}`
    );

    assignmentTask = response.data.assignmentTask;

    //get all the exam centers by district with school resolved
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/examcenters/school`
    );

    examCenters = response.data.examCenters;

    dispatch({
      type: INITIALIZE_ASSIGNMENT_TASK_FORM,
      payload: { assignmentTask, examCenters },
    });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
