import {
    FETCH_ONEEVENT_START,
    FETCH_ONEEVENT_SUCCESS,
    FETCH_ONEEVENT_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    DUMB_DUMB_FIRE,
    DUMB_DUMB_WIN
} from '../actions/EventAction'

const initialState = {
    event: [],
    fetchingData: false,
    placingData: false,
    errors: '',
    mountComplete: false,
}

export const eventReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_ONEEVENT_START:
            return {
                ...state,
                error: '',
                isSearching: true
            }
        case FETCH_ONEEVENT_SUCCESS:
            return {
                ...state,
                error: '',
                isSearching: false,
                event: action.payload,
                mountComplete: true,
            }
        case FETCH_ONEEVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSearching: false
            }
        case ADD_USER_START:
            return {
                ...state,
                placingData: true,
                error: ''
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                error: '',
                placingData: false,
                event: action.payload
            }
        case DUMB_DUMB_WIN:
            return {
                event: action.payload
            }
        default:
            return state;
    }
}