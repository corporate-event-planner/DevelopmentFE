import axios from "axios";

export const START_LOGGIN = "START_LOGGIN";
export const FAILURE_LOGGIN = "FAILURE_LOGGIN";
export const SUCCESS_LOGGIN = "SUCCESS_LOGGIN";


export const fetchLogin = user => dispatch => {
  console.log(user);
  dispatch({ type: START_LOGGIN });
  return axios
    .post(`/login`, user)
    .then(res => {
      return true;
    })
    .catch(err => {
      dispatch({
        type: FAILURE_LOGGIN,
        payload: err.response.data.error.error.join(" and ")
      });
      return false;
    });
};
