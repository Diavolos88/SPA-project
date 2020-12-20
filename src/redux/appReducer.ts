import {getMe} from "./authReducer";

export const SET_INITIALIZED = 'SET_INITIALIZED'

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}


const appReduser = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export type initializedSuccessActionType = {type : typeof SET_INITIALIZED}

export const initializedSuccess = (): initializedSuccessActionType => {
    return {type: SET_INITIALIZED}
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getMe())
    if (promise) {
        dispatch(initializedSuccess())
    }
}

export default appReduser