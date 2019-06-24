import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { registerReducer } from "./RegisterReducer";
import notifyReducer from "react-redux-notify";

export default combineReducers({
  loginReducer,
  notifications: notifyReducer,
  registerReducer
});
