import { GET_DASHBOARD_INFO } from "../actions/DashboardActions";

const initialState = {};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default DashboardReducer;
