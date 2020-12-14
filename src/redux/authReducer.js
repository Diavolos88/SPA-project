import {securityAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVA = 'SET_USER_AVA'
const GET_CAPTCHA_URL_SACCESS = 'GET_CAPTCHA_URL_SACCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authAva: null,
    captchaUrl: null

}
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            let copy = {
                ...state,
                ...action.data
            }
            return copy
        }
        case SET_USER_AVA: {
            let copy = {
                ...state,
                authAva: action.img
            }
            return copy
        }
        case GET_CAPTCHA_URL_SACCESS: {
            let copy = {
                ...state,
                captchaUrl: action.captchaUrl
            }
            return copy
        }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    debugger
    return {
        type: SET_USER_DATA, data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
}

export const setUserAva = (img) => {
    return {
        type: SET_USER_AVA, img: img
    }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SACCESS, captchaUrl: captchaUrl
    }
}

export const getMe = () => {
    return async (dispatch) => {
        let response = await usersAPI.author()
        let {login, id, email} = response.data
        debugger
        if (response.resultCode === 0) {
            dispatch(setUserData(id, email, login, true))
            usersAPI.getOneUser(id).then(response => {
                dispatch(setUserAva(response.photos.small))
            })
        }
    }
}

export const login = (email, password, rememberMe = false, captcha) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
        let response = await usersAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export const getCaptchaUrl = () => async (dispatch) =>
{
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReduser