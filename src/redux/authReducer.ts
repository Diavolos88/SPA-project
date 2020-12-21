import {ResultCodeEnum, securityAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVA = 'SET_USER_AVA'
const GET_CAPTCHA_URL_SACCESS = 'GET_CAPTCHA_URL_SACCESS'
const UPDATE_AUTH_AVA = 'UPDATE_AUTH_AVA'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    authAva: null as string | null,
    captchaUrl: null as string | null
}

export type initialStateType = typeof initialState


const authReduser = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_USER_AVA: {
            return {
                ...state,
                authAva: action.img
            }
        }
        case GET_CAPTCHA_URL_SACCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state
    }
}


type setUserDataActionDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
}

type setUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: setUserDataActionDataType
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): setUserDataActionType => {
    return {
        type: SET_USER_DATA, data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
}

type setUserAvaDataActionType = {
    type: typeof SET_USER_AVA,
    img: string
}

export const setUserAva = (img: string): setUserAvaDataActionType => {
    return {
        type: SET_USER_AVA, img: img
    }
}

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SACCESS,
    captchaUrl: string
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SACCESS, captchaUrl: captchaUrl
    }
}

export const getMe = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.author()
        let {login, id, email} = response.data
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(setUserData(id, email, login, true))
            let response2 = await usersAPI.getOneUser(id)
            if (response2.photos && response2.photos.small)
            dispatch(setUserAva(response2.photos.small))
        }
    }
}

export const login = (email: string, password: string, rememberMe = false, captcha: any) => {
    return async (dispatch: any) => {
        let response = await usersAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getMe())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            dispatch(stopSubmit("login", {
                _error: response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            }))
        }
    }
}

export const logout = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReduser