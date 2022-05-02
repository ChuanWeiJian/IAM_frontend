import axios from "axios";
import { SET_ERROR } from "./ErrorModalActions";
import { SET_LOADING } from "./LoadingActions";

export const GET_ALL_ASSIGNMENT_RESULTS =
  "ASSIGNMENT-RESULT-INVIGILATOR GET_ALL_ASSIGNMENT_RESULTS";

export const getAllAssignmentResults = (userId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let response, profile;

  try {
    response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/results-invigilator/${userId}`
    );

    profile = response.data.profile;
    dispatch({
      type: GET_ALL_ASSIGNMENT_RESULTS,
      payload: {
        ...profile,
        listOfInvigilatorExperience: profile.listOfInvigilatorExperience.map(
          (exp, index) => {
            return { ...exp, index: index + 1 };
          }
        ),
      },
    });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }

  dispatch({ type: SET_LOADING, payload: false });
};
