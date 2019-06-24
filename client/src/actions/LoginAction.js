import axios from "axios";

export const START_LOGGIN = "START_LOGGIN";
export const FAILURE_LOGGIN = "FAILURE_LOGGIN";
export const SUCCESS_LOGGIN = "SUCCESS_LOGGIN";

// const api = "https://backendfoodtruck.herokuapp.com";
const api = "http://localhost:5000";

export const fetchLogin = user => dispatch => {
  console.log(user);
  dispatch({ type: START_LOGGIN });
  return axios
    .post(`${api}/login`, user)
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
