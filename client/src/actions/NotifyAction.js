import {
  createNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_INFO
} from "react-redux-notify";

const mySuccessNotification = {
  message: "You have been logged in!",
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 5000,
  canDismiss: true
};

const myErrorNotification = {
  message: "You have been logged in!",
  type: NOTIFICATION_TYPE_ERROR,
  duration: 5000,
  canDismiss: true
};

export const successNotification = () => dispatch => {
  return dispatch(createNotification(mySuccessNotification));
};

export const errorNotification = message => dispatch => {
  return dispatch(
    createNotification({ ...myErrorNotification, message: message })
  );
};
