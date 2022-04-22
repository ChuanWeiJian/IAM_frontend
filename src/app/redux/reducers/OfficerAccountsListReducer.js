import {
  GET_ALL_OFFICER_ACCOUNTS,
  TOGGLE_FORM,
  SET_SELECTED_INDEX,
  REMOVE_ACCOUNT,
} from "../actions/OfficerAccountsListActions";

const initialState = {
  accounts: [],
  showForm: false,
  selectedIndex: 0,
};

const OfficerAccountsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFICER_ACCOUNTS:
      return { ...state, accounts: action.payload };
    case TOGGLE_FORM:
      return { ...state, showForm: action.payload };
    case SET_SELECTED_INDEX:
      return { ...state, selectedIndex: action.payload };
    case REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(
          (account) => account.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default OfficerAccountsListReducer;
