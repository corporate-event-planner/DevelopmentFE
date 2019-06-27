import axiosWithAuth from './AxiosWithAuth'

export const FETCH_ONEEVENT_START = 'FETCH_ONEEVENT_START';
export const FETCH_ONEEVENT_SUCCESS = 'FETCH_ONEEVENT_SUCCESS';
export const FETCH_ONEEVENT_FAILURE = 'FETCH_ONEEVENT_FAILURE';

export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'

export const ADD_TASK_START = 'ADD_TASK_START'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const DUMB_DUMB_FIRE = 'DUMB_DUMB_FIRE';
export const DUMB_DUMB_WIN = 'DUMB_DUMB_WIN';

const testState = {
    tasklist: [
    {
        "taskid": 7,
        "name": "Reservations",
        "description": "Make Hotel Reservations",
        "assigned": "John",
        "completed": false,
        "duedate": "8-1-2019",
        "category": "Production",
        "purchase": [

        ]
        },
        {
        "taskid": 8,
        "name": "RSVP",
        "description": "Have all employees either RSVP or opt out",
        "assigned": "Michelle",
        "completed": false,
        "duedate": "7-15-2019",
        "category": "Production",
        "purchase": [
            {
                "purchaseid": 2,
                "description": "Reserve Hotel Rooms",
                "vendorname": "Mariott Hotel",
                "pointofcontact": "Judy",
                "email": "judyisawesome@email.com",
                "price": "$3,000",
                "qty": 0
            },
            {
                "purchaseid": 3,
                "description": "Reserve Hotel Rooms",
                "vendorname": "Mariott Hotel",
                "pointofcontact": "Judy",
                "email": "judyisawesome@email.com",
                "price": "$3,000",
                "qty": 0
            }
        ]
        }
    ]
}

export const getOneEvent = (eventid) => dispatch => {
    // console.log('we in da action now, fam')
    // console.log('here be da eventid', eventid)
    dispatch({ type: FETCH_ONEEVENT_START })
    axiosWithAuth()
        .get(`https://corporate-event-planner.herokuapp.com/events/${eventid}`)
        .then(event => {
            dispatch({ type: FETCH_ONEEVENT_SUCCESS, payload: event.data })
            // console.log('data do what data does')
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}

export const addNewUser = (eventid, user) => dispatch => {
    const userDrilled = {
        'userList': [
            {
                'user': {
                    'username': user
                }
            }
        ]
    }

    dispatch({ type: ADD_USER_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`, userDrilled)
        .then(event => {
            dispatch ({ type: ADD_USER_SUCCESS, payload: event.data })
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}

// export const removeUser = (userid) => dispatch => {
//     dispatch({ type: DELETE_USER_START })
//     axiosWithAuth()
//         .delete(`https://corporate-event-planner.herokuapp.com/user/${userid}`)

// }

export const addNewTask = (eventid, task) => dispatch => {
    dispatch ({ type: ADD_TASK_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/${eventid}`, task)
        .then(event=> {
            dispatch({ type: ADD_TASK_SUCCESS, payload: event.data})
        })
}

export const dummyData = (eventid) => dispatch => {
    dispatch({ type: DUMB_DUMB_FIRE })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`,(testState))
        .then(event => {
            dispatch({ type: DUMB_DUMB_WIN, payload: event.data })
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}