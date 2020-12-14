import {usersAPI as getOneUser, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'

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
        case SAVE_PHOTO: {
            let copy = {...state, profile: {...state.profile}}
            copy.profile.photos = action.photos
            return copy
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const savePhotoSaccess = (photos) => {
    return {type: SAVE_PHOTO, photos: photos}
}

export const setUserStatusAC = (status) => {
    return {type: SET_STATUS, status: status}
}

export const saveProfileSaccess = (profile) => {
    return {type: SET_STATUS, profile: profile}
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

export const savePhoto = (photo) => {
    return (dispatch) => {
        usersAPI.savePhoto(photo).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSaccess(photo))
            }
        })
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await usersAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("editProfile", {
            _error: response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReduser