import {
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    SEARCH_STARTING,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    ADD_EVENTS_FAILURE,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_START
} from "../actions/EventsAction";

const initialState = {
    events: [],
    isSearching: false,
    isFetching: false,
    errors: ""
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_START:
            return {
                ...state,
                errors: "",
                isFetching: true,
                isSearching: true
            };
        case ADD_EVENTS_START:
            return {
                ...state,
                errors: "",
                isFetching: true,
                isSearching: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                errors: "",
                isSearching: false,
                isFetching: false,
                events: action.payload
            };
        case ADD_EVENTS_SUCCESS:
            return {
                ...state,
                errors: "",
                isSearching: false,
                isFetching: false,
                events: [...state.events, action.payload]
            };
        case FETCH_EVENTS_FAILURE:
            return {
                ...state,
                errors: action.payload,
                isFetching: false,
                isSearching: false
            };

        case ADD_EVENTS_FAILURE:
            return {
                ...state,
                errors: action.payload,
                isFetching: false,
                isSearching: false
            };
        default:
            return state;
    }
};
