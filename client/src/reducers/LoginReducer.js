import {
  START_LOGGIN,
  FAILURE_LOGGIN,
  SUCCESS_LOGGIN
} from "../actions/LoginAction";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  isFetching: false,
  errors: null,
  user: {}
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGGIN:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: null
      };
    case FAILURE_LOGGIN:
      return {
        isFetching: false,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: action.payload
      }
    default:
      return state;
  }
};
