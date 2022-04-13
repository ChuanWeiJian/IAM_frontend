export const SET_ERROR = "SET_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};

export const resetError = () => {
  return { type: RESET_ERROR };
};
