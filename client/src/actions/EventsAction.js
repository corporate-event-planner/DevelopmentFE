import axiosWithAuth from "./AxiosWithAuth";
import axios from "axios";
export const FETCH_EVENTS_START = "FETCH_EVENTS_START";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";
export const ADD_EVENTS_FAILURE = "ADD_EVENTS_FAILURE";
export const ADD_EVENTS_SUCCESS = "ADD_EVENTS_SUCCESS";
export const ADD_EVENTS_START = "ADD_EVENTS_START";
export const SEARCH_STARTING = "SEARCH_STARTING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const getEvents = () => dispatch => {
    dispatch({ type: FETCH_EVENTS_START });
    axiosWithAuth()
        .get("https://corporate-event-planner.herokuapp.com/events/all")
        .then(events => {
            dispatch({ type: FETCH_EVENTS_SUCCESS, payload: events.data });
        })
        .catch(err => {
            console.log(err.response);
        });
};

export const postEvent = event => dispatch => {
    dispatch({ type: ADD_EVENTS_START });
    return axiosWithAuth()
        .post("https://corporate-event-planner.herokuapp.com/events/new", event)
        .then(res => {
            dispatch({ type: ADD_EVENTS_SUCCESS, payload: event });
            return true;
        })
        .catch(err => {
            dispatch({ type: ADD_EVENTS_FAILURE, payload: "Error" });
            return false;
        });
};

export const deleteEvent = id => dispatch => {

}

export const searchEvents = search => dispatch => {
    console.log(search);
    dispatch({ type: SEARCH_STARTING });
    return axios.get("/events");
};
