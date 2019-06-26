import axios from "axios";

export const START_LOGGIN = "START_LOGGIN";
export const FAILURE_LOGGIN = "FAILURE_LOGGIN";
export const SUCCESS_LOGGIN = "SUCCESS_LOGGIN";

const tempKey = "https://corporate-event-planner.herokuapp.com/oauth/token?grant_type=password&client_id=lambda-client&client_secret=lambda-secret&username=AlejandroTheAnimal&password=password";


export const fetchLogin = user => dispatch => {
  // console.log(user);
  dispatch({ type: START_LOGGIN });
  return axios
    .post("https://corporate-event-planner.herokuapp.com/oauth/token", `grant_type=password&username=${user.username}&password=${user.password}`, {
      headers: {
        Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => {
      dispatch({ type: SUCCESS_LOGGIN });
      localStorage.setItem("token", res.data.access_token)
      return true;
    })
    .catch(err => {
      dispatch({
        type: FAILURE_LOGGIN,
        payload: `Incorrect credentials`
      });
      return false;
    });
};