import {
    PROFILE_UPDATE_START,
    PROFILE_UPDATE_SUCCESS
} from '../actions/ProfileAction'

const initialState = {
    user: [],
    placingData: false,
    errors: '',
}

export const profileReducer = ( state = initialState, action ) => {
    switch(action.type) {
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
                user: action.payload
            }
        default:
            return state;
    }
}