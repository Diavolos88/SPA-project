import {usersAPI as getOneUser, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getMe, setUserAva, setUserData} from "./authReducer";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'

type initialStateType = {
    status: string
    profile?: Array<userProfileType>
}

let initialState: initialStateType = {
    status: '',
}

export type userProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook?: string | null,
        website?: string | null,
        vk?: string | null,
        twitter?: string | null,
        instagram?: string | null,
        youtube?: string | null,
        github?: string | null,
        mainLink?: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

const profileReduser = (state = initialState, action: any): any => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            let copy = {...state}
            copy.status = action.status
            return copy
        }
        case SAVE_PHOTO: {
            let copy = {...state, profile: {...state.profile}}
            // @ts-ignore
            copy.profile.photos = action.photos
            return copy
        }
        default:
            return state
    }
}

export const setUserProfile = (profile: any) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const savePhotoSaccess = (photos: any) => {
    return {type: SAVE_PHOTO, photos: photos}
}

export const setUserStatusAC = (status: string) => {
    return {type: SET_STATUS, status: status}
}

export const saveProfileSaccess = (profile: any) => {
    return {type: SET_STATUS, profile: profile}
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: any) => {
        if (!userId) {
            let response = await usersAPI.author()
            let response2 = await usersAPI.getOneUser(response.data.id)
            dispatch(setUserProfile(response2))
        } else {
            let response = await usersAPI.getOneUser(userId)
            dispatch(setUserProfile(response))
        }
    }
}

export const setUserStatus = (userId: number) => {
    return async (dispatch: any) => {
        if (!userId) {
            let response = await usersAPI.author()
            let response2 = await usersAPI.getUserStatus(response.data.id)
            dispatch(setUserStatusAC(response2))
        } else {
            let response = await usersAPI.getUserStatus(userId)
            dispatch(setUserStatusAC(response))
        }
    }
}

export const updateUserStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await usersAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    }
}

export const savePhoto = (photo: any) => {
    return async (dispatch: any) => {
        let response = await usersAPI.savePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSaccess(photo))
            let response2 = await usersAPI.author()
            let {login, id, email} = response2.data
            if (response2.resultCode === 0) {
                dispatch(setUserData(id, email, login, true))
                let response3 = await usersAPI.getOneUser(id)
                if (response3.photos && response3.photos.small) {
                    dispatch(setUserAva(response3.photos.small))
                }
            }
        }
    }
}

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
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