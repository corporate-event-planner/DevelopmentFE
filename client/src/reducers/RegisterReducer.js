import {
  START_REGISTER,
  FAILURE_REGISTER,
  SUCCESS_REGISTER
} from "../actions/RegisterAction";

const initialState = {
  isRegistered: false,
  isFetching: false,
  errors: null,
  user: {}
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REGISTER:
      return {
        ...state,
        isFetching: true,
        isRegistered: false,
        errors: null
      };
    case FAILURE_REGISTER:
      return {
        isFetching: false,
        isRegistered: false,
        errors: action.payload
      }
    default:
      return state;
  }
};
