import {
  SET_PAGE,
  SET_ROWS_PER_PAGE,
  RESET_TABLE_STATE,
} from "../actions/TableActions";

const initialState = {
  rowsPerPage: 10,
  page: 0,
};

const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROWS_PER_PAGE: {
      return { ...state, rowsPerPage: action.payload };
    }
    case SET_PAGE: {
      return { ...state, page: action.payload };
    }
    case RESET_TABLE_STATE:
      return initialState;
    default: {
      return state;
    }
  }
};

export default TableReducer;
