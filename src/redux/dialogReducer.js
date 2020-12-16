import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserProfile, setUserProfile} from "./profileReducer";

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE'
const UPDATE_USERS_VALUE = 'UPDATE_USERS_VALUE'
const DELETE_FRIENDS = 'DELETE_FRIENDS'
const GET_MESSAGES = 'GET_MESSAGES'
const DELETE_MESSAGES = 'DELETE_MESSAGES'

let initialState = {
    friendData: {},
    mesData: {}
}

const dialogReducer = (state = initialState, action) => {
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


export const updateAllFriends = (page) => {
    return async (dispatch) => {
        const response = await usersAPI.getFriends(page)
            dispatch(updateFriends(response.items))
    }
}

export const deleteAllFriends = () => {
    return async (dispatch) => {
        dispatch(deleteFriends())
    }
}


export const deleteAllMessage = () => {
    return async (dispatch) => {
        dispatch(deleteMessages())
    }
}


export const getAllMessages = (id) => {
    return async (dispatch) => {
        const response = await usersAPI.getMessages(id)
        debugger
        dispatch(getMessagesAC(response.items))
    }
}

export const getMessagesAC= (messages) => {
    return {type: GET_MESSAGES, messages: messages}
}


export const sendMessages = (message, id) => {
    return async (dispatch) => {
        let response = await usersAPI.sendNewMessages(message, id)
        response = await usersAPI.getMessages(id)
        debugger
        dispatch(getMessagesAC(response.items))
    }
}

export const updateFriends = (friendData) => {
    return {type: UPDATE_USERS_VALUE, friendData: friendData}
}

export const deleteFriends = () => {
    return {type: DELETE_FRIENDS}
}

export const deleteMessages = () => {
    return {type: DELETE_MESSAGES}
}

export const addMessageCreatorAction = (messageValue) => {
    return {type: UPDATE_MESSAGE_VALUE, messageValue: messageValue}
}

export default dialogReducer