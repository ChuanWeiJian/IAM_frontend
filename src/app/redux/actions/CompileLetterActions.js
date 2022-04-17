import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_COMPILE_LETTER_INFO = "COMPILE-LETTER GET_COMPILE_LETTER_INFO";

export const getCompileLetterInfo = (role, taskId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, assignmentResult, letterTemplates;
  try {
    //get assignment result by task id and role with all fields resolved
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

    //get all letter templates under the district
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/letters/Kluang`
    );

    letterTemplates = response.data.letterTemplates;

    dispatch({
      type: GET_COMPILE_LETTER_INFO,
      payload: {
        assignmentResult: {
          ...assignmentResult,
          results: resolvedResults.map((result, index) => {
            return { ...result, index: index + 1 };
          }),
        },
        letterTemplates,
      },
    });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
