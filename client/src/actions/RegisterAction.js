import axios from "axios";

export const START_REGISTER = "START_REGISTER";
export const FAILURE_REGISTER = "FAILURE_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";

// const api = "https://backendfoodtruck.herokuapp.com";

export const fetchRegister = user => dispatch => {
  const drilledUser = {
    'username': user.username,
    'email': user.email,
    'companyname': user.companyname,
    'role': user.role,
    'password': user.password
  }

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  console.log(user);
  dispatch({ type: START_REGISTER });
  return axios
    .post(`https://corporate-event-planner.herokuapp.com/signup/`, drilledUser, config)
    .then(res => {
      dispatch({ type: SUCCESS_REGISTER });
      return true;
    })
    .catch(err => {
      dispatch({
        type: FAILURE_REGISTER,
        payload: `err.response.data.error.error.join(" and ")`
      });
      return false;
    });
};
