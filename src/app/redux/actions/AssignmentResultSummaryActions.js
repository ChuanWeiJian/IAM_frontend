import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_ASSIGNMENT_RESULT_SUMMARY_INFO =
  "ASSIGNMENT-RESULT-SUMMARY GET_ASSIGNMENT_RESULT_SUMMARY_INFO";

export const getAssignmentResultSummary =
  (role, taskId) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    let response, assignmentResult;

    try {
      //get assignment result by assignment task id and role with all resolved (the assignment task will be resolved as well)
      response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/results/${taskId}/${role}`
      );

      //resolve result into array
      assignmentResult = response.data.assignmentResult;
      let resolvedResults = [];

      response.data.assignmentResult.results.forEach((data) => {
        data.invigilators.forEach((invigilator) => {
          resolvedResults.push({
            examCenter: data.examCenter,
            invigilator: invigilator,
          });
        });
      });

      dispatch({
        type: GET_ASSIGNMENT_RESULT_SUMMARY_INFO,
        payload: {
          assignmentResult: {
            ...assignmentResult,
            results: resolvedResults.map((result, index) => {
              return { ...result, index: index + 1 };
            }),
          },
        },
      });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }

    dispatch({ type: SET_LOADING, payload: false });
  };
