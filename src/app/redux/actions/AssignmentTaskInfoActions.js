import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";
import moment from "moment";

export const GET_ASSIGNMENT_TASK_INFO =
  "ASSIGNMENT-TASK-INFO GET_ASSIGNMENT_TASK_INFO";
export const UPDATE_ASSIGNMENT_TASK =
  "ASSIGN-INVIGILATOR UPDATE_ASSIGNMENT_TASK";

export const getAssignmentTaskInfo = (taskId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, assignmentTask;
  try {
    //get assignment task by id & district with resolved exam center and exam center data
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/assignments/resolve/${taskId}/Kluang`
    );

    assignmentTask = response.data.assignmentTask;
    dispatch({ type: GET_ASSIGNMENT_TASK_INFO, payload: { assignmentTask } });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};

export const updateAssignmentTask = (assignmentTask) => {
  return {
    type: UPDATE_ASSIGNMENT_TASK,
    payload: assignmentTask,
  };
};
