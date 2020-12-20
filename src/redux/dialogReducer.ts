import {usersAPI} from "../api/api";

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE'
const UPDATE_USERS_VALUE = 'UPDATE_USERS_VALUE'
const DELETE_FRIENDS = 'DELETE_FRIENDS'
const GET_MESSAGES = 'GET_MESSAGES'
const DELETE_MESSAGES = 'DELETE_MESSAGES'

type initialStateType = {
    friendData: any,
    mesData: any
}

let initialState: initialStateType = {
    friendData: {},
    mesData: {}
}



const dialogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = {
                mes: action.message,
            }
            let stateCopy = {...state}
            stateCopy.mesData = [...state.mesData, message]
            return stateCopy
        }
        case UPDATE_USERS_VALUE: {
            let stateCopy = {...state}
            if(state.friendData.length > 0) {
                stateCopy.friendData = [...state.friendData, ...action.friendData]
            } else {
                stateCopy.friendData = [...action.friendData]
            }
            return stateCopy
        }
        case DELETE_FRIENDS: {
            let stateCopy = {...state}
                stateCopy.friendData = []
            return stateCopy
        }
        case DELETE_MESSAGES: {
            let stateCopy = {...state}
            stateCopy.mesData = []
            return stateCopy
        }
        case GET_MESSAGES: {
            let stateCopy = {...state}
            if(state.mesData.length > 0) {
                stateCopy.mesData = [...state.mesData, ...action.messages]
            } else {
                stateCopy.mesData = [...action.messages]
            }
            return stateCopy
        }
        default:
            return state
    }
}


export const updateAllFriends = (page: any) => {
    return async (dispatch: any) => {
        const response = await usersAPI.getFriends(page)
            dispatch(updateFriends(response.items))
    }
}

export const deleteAllFriends = () => {
    return async (dispatch: any) => {
        dispatch(deleteFriends())
    }
}


export const deleteAllMessage = () => {
    return async (dispatch: any) => {
        dispatch(deleteMessages())
    }
}


export const getAllMessages = (id: number) => {
    return async (dispatch: any) => {
        const response = await usersAPI.getMessages(id)
        dispatch(getMessagesAC(response.items))
    }
}

type getMessagesACType = {
    type: typeof GET_MESSAGES, messages: string
}

export const getMessagesAC= (messages: string): getMessagesACType => {
    return {type: GET_MESSAGES, messages: messages}
}


export const sendMessages = (message: string, id: number) => {
    return async (dispatch: any) => {
        let response = await usersAPI.sendNewMessages(message, id)
        response = await usersAPI.getMessages(id)
        dispatch(getMessagesAC(response.items))
    }
}

export const updateFriends = (friendData: any) => {
    return {type: UPDATE_USERS_VALUE, friendData: friendData}
}

export const deleteFriends = () => {
    return {type: DELETE_FRIENDS}
}

export const deleteMessages = () => {
    return {type: DELETE_MESSAGES}
}

type addMessageCreatorActionType = {
    type: typeof UPDATE_MESSAGE_VALUE, messageValue: string
}

export const addMessageCreatorAction = (messageValue: string): addMessageCreatorActionType => {
    return {type: UPDATE_MESSAGE_VALUE, messageValue: messageValue}
}

export default dialogReducer