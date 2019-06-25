import axios from 'axios';

export const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const SEARCH_STARTING = 'SEARCH_STARTING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

const key = '9ed169d0'
const headers = { "X-API-Key": key }

// export const getEvents = () => dispatch => {
//     dispatch({ type: FETCH_EVENTS_START })
//     axios
//         .get('https://my.api.mockaroo.com/events.json', {headers})
//         .then(response => {
//             dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data })
//         })
//         .error(error => {
//             console.log(error.response)
//             dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.response })
//         })
// }

export const getEvents = () => dispatch => {
    dispatch({ type: FETCH_EVENTS_START })
    fetch('https://my.api.mockaroo.com/events.json', {headers})
        .then(response => response.json() )
        .then(events => {
            console.log(events)
            dispatch({ type: FETCH_EVENTS_SUCCESS, payload: events })
        })
}

export const searchEvents = search => dispatch => {
    console.log(search)
    dispatch({ type: SEARCH_STARTING });
    return axios
        .get('/events')
}