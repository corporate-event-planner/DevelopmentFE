import {
    PROFILE_GET_START,
    PROFILE_GET_SUCCESS,
    PROFILE_UPDATE_START,
    PROFILE_UPDATE_SUCCESS,
    FETCH_MYEVENTS_START,
    FETCH_MYEVENTS_SUCCESS,
    FETCH_MYEVENTS_FAILURE,
    DELETE_ONE_FAILURE,
    DELETE_ONE_START,
    DELETE_ONE_SUCCESS
} from '../actions/HomeAction'

const initialState = {
    user: [],
    events: [],
    isSearching: '',
    isFetching: '',
    placingData: false,
    errors: '',
    mountComplete: false,
}

export const homeReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case PROFILE_GET_START:
            return {
                ...state,
                error: '',
                placingData: true,
                mountComplete: false,
            }
        case PROFILE_GET_SUCCESS:
            return {
                ...state,
                error: '',
                placingData: false,
                mountComplete: true,
                user: action.payload
            }
        case PROFILE_UPDATE_START:
            return {
                ...state,
                error: '',
                placingData: true,
            }
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                error: '',
                placingData: false,
                mountComplete: true,
                user: action.payload
            }
        case FETCH_MYEVENTS_START:
            return {
                ...state,
                errors: "",
                isFetching: true,
                isSearching: true
            };
        case FETCH_MYEVENTS_SUCCESS:
            return {
                ...state,
                errors: "",
                isSearching: false,
                isFetching: false,
                events: action.payload
            };
        case FETCH_MYEVENTS_FAILURE:
            return {
                ...state,
                errors: action.payload,
                isFetching: false,
                isSearching: false
            };
        case DELETE_ONE_START:
            return {
                ...state,
                errors: "",
                isFetching: true
            }
        case DELETE_ONE_SUCCESS:
            return {
                ...state,
                errors: "",
                isFetching: false,
                events: state.events.filter(event => event.eventid !== action.payload.eventid)
            }
        default:
            return state;
    }
}