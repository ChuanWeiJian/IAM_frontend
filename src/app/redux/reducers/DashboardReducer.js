import {
  GET_DASHBOARD_INFO,
  RESET_DASHBOARD_DATA,
} from "../actions/DashboardActions";

const initialState = {};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_INFO:
      return action.payload;
    case RESET_DASHBOARD_DATA:
      return initialState;
    default:
      return state;
  }
};

export default DashboardReducer;
