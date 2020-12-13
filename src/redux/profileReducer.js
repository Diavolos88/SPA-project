import {usersAPI as getOneUser, usersAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    status: '',
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            let copy = {...state}
            copy.profile = action.profile
            return copy
        }
        case SET_STATUS: {
            let copy = {...state}
            copy.status = action.status
            return copy
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const setUserStatusAC = (status) => {
    return {type: SET_STATUS, status: status}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            usersAPI.author().then(response => {
                usersAPI.getOneUser(response.data.id).then(response => {
                    dispatch(setUserProfile(response))
                })
            })
        } else {
            usersAPI.getOneUser(userId).then(response => {
                dispatch(setUserProfile(response))
            })
        }
    }
}

export const setUserStatus = (userId) => {
    return (dispatch) => {
        if (!userId) {
            usersAPI.author().then(response => {
                usersAPI.getUserStatus(response.data.id).then(response => {
                    dispatch(setUserStatusAC(response))
                })
            })
        } else {
            usersAPI.getUserStatus(userId).then(response => {
                dispatch(setUserStatusAC(response))
            })
        }
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        usersAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
    }
}

export default profileReduser