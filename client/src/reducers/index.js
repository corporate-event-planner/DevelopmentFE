import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { registerReducer } from "./RegisterReducer";
import { eventsReducer } from './EventsReducer';
import { eventReducer } from './EventReducer'
import { taskReducer } from './TaskReducer'
import { profileReducer } from './ProfileReducer'
import notifyReducer from "react-redux-notify";

export default combineReducers({
  loginReducer,
  notifications: notifyReducer,
  registerReducer,
  eventsReducer,
  eventReducer,
  taskReducer,
  profileReducer
});
