import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";
import moment from "moment";

export const GET_ALL_ASSIGNMENT_TASKS =
  "ASSIGNMENT-TASKS-LIST GET_ALL_ASSIGNMENT_TASKS";
export const UPDATE_ASSIGNMENT_TASKS_LIST =
  "DELETE-ASSIGNMENT-TASK UPDATE_ASSIGNMENT_TASKS_LIST";

export const getAllAssignmentTasks = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, assignmentTasks;
  try {
    //get all assignment tasks by district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/assignments/Kluang`
    );
    //resolve the actions, index and date fields
    assignmentTasks = response.data.assignmentTasks.map((task, index) => {
      return {
        ...task,
        createdDate: moment(task.createdDate, moment.ISO_8601).format(
          "DD/MM/YYYY HH:mm"
        ),
        collectionDate: moment(task.collectionDate, moment.ISO_8601).format(
          "DD/MM/YYYY HH:mm"
        ),
        actions: {
          view: "/assignment/" + task.id,
          edit: "/assignment/edit/" + task.id,
          delete: "/assignment/delete/" + task.id,
        },
        index: index + 1,
      };
    });

    dispatch({ type: GET_ALL_ASSIGNMENT_TASKS, payload: assignmentTasks });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};

export const updateAssignmentTaskList = (taskId) => {
  return { type: UPDATE_ASSIGNMENT_TASKS_LIST, payload: taskId };
};
