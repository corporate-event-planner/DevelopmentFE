import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import notifyReducer from "react-redux-notify";

export default combineReducers({
  loginReducer,
  notifications: notifyReducer
});
