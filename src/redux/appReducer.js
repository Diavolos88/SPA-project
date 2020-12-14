import {usersAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";
import {stopSubmit} from "redux-form";
import {getMe} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}
const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            let copy = {
                ...state,
                initialized: true
            }
            return copy
        }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {type: SET_INITIALIZED}
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getMe())
    if (promise) {
        dispatch(initializedSuccess())
    }
}

export default appReduser