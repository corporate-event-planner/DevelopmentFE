import axiosWithAuth from './AxiosWithAuth'

export const FETCH_ONEEVENT_START = 'FETCH_ONEEVENT_START';
export const FETCH_ONEEVENT_SUCCESS = 'FETCH_ONEEVENT_SUCCESS';
export const FETCH_ONEEVENT_FAILURE = 'FETCH_ONEEVENT_FAILURE';
export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'

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
  console.log('we in da action now, fam')
  // console.log('here be da eventid', eventid)
  dispatch({ type: FETCH_ONEEVENT_START })
  axiosWithAuth()
    .get(`https://corporate-event-planner.herokuapp.com/events/${eventid}`)
    .then(event => {
      dispatch({ type: FETCH_ONEEVENT_SUCCESS, payload: event.data })
      console.log('data do what data does')
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
  return axiosWithAuth()
    .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`, userDrilled)
    .then(event => {
      // dispatch({ type: ADD_USER_SUCCESS, payload: event.data.userList })
      // console.log('in da action dispatch yo', event.data)
      getOneEvent(eventid)
      console.log('we made it')
    })
    .catch(error => {
      console.log('catch error', error)
    })
}