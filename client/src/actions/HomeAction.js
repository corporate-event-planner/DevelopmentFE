import axiosWithAuth from './AxiosWithAuth'

export const PROFILE_GET_START = 'PROFILE_GET_START'
export const PROFILE_GET_SUCCESS = 'PROFILE_GET_SUCCESS'

export const PROFILE_UPDATE_START = 'PROFILE_UPDATE_START'
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS'

export const FETCH_MYEVENTS_START = "FETCH_MYEVENTS_START";
export const FETCH_MYEVENTS_SUCCESS = "FETCH_MYEVENTS_SUCCESS";
export const FETCH_MYEVENTS_FAILURE = "FETCH_MYEVENTS_FAILURE";

export const DELETE_ONE_START = "DELETE_ONE_START"
export const DELETE_ONE_SUCCESS = "DELETE_ONE_SUCCESS"
export const DELETE_ONE_FAILURE = "DELETE_ONE_FAILURE"

export const getMe = () => dispatch => {
    dispatch ({ type: PROFILE_GET_START })
    axiosWithAuth()
    .get(`https://corporate-event-planner.herokuapp.com/users/me`)
    .then(response => {
        dispatch({ type: PROFILE_GET_SUCCESS, payload: response.data })
    }).catch(err => {
        return false;
    })
}

export const updateProfile = (userid, info) => dispatch => {
    const drilledInfo = {
        'userid': info.userid,
        'username': info.username,
        'email': info.email,
        'companyname': info.companyname,
        'role': info.role,
        'image': info.image
    }

    dispatch({ type: PROFILE_UPDATE_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/user/${userid}`, drilledInfo)
        .then(event => {
            dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: event.data })
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}

export const getMyEvents = () => dispatch => {
    dispatch({ type: FETCH_MYEVENTS_START });
    axiosWithAuth()
        .get("https://corporate-event-planner.herokuapp.com/events/all")
        .then(events => {
            dispatch({ type: FETCH_MYEVENTS_SUCCESS, payload: events.data });
        })
        .catch(err => {
            console.log(err.response);
        });
};

export const deleteEvent = event => dispatch => {
    dispatch({ type: DELETE_ONE_START });
    return axiosWithAuth().delete(`https://corporate-event-planner.herokuapp.com/events/delete/${event.eventid}`).then(res => {
        dispatch({ type: DELETE_ONE_SUCCESS, payload: event })
    }).catch(err => {
        dispatch({ type: DELETE_ONE_FAILURE })
    });
}
