import axiosWithAuth from './AxiosWithAuth'

export const PROFILE_UPDATE_START = 'PROFILE_UPDATE_START'
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS'

export const updateProfile = (userid, info) => dispatch => {
    const drilledInfo = {
        user: {
            'userid': info.userid,
            'username': info.username,
            'email': info.email,
            'companyname': info.companyname,
            'role': info.role,
            'image': info.image
        }
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

export const getMe = () => dispatch => {
    return axiosWithAuth().get(`https://corporate-event-planner.herokuapp.com/users/me`).then(res => {
        return res.data;
    }).catch(err => {
        return false;
    })
}