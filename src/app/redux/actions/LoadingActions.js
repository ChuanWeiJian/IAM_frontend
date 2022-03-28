export const SET_SUBMIT_LOADING = "SET_SUBMIT_LOADING";
export const SET_FETCHING_LOADING = "SET_FETCHING_LOADING";

export const setSubmitLoading = (isLoading) => {
  return {
    type: SET_SUBMIT_LOADING,
    payload: isLoading,
  };
};
export const setFetchingLoading = (isLoading) => {
  return {
    type: SET_FETCHING_LOADING,
    payload: isLoading,
  };
};
