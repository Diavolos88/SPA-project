import React from 'react';
import {
    deleteAllFriends, deleteAllMessage,
    getAllMessages,
    sendMessages,
    updateAllFriends
} from "../../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendData: state.dialogsData.friendData,
        mesData: state.dialogsData.mesData,
        inputValue: state.dialogsData.inputValue,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessages: (message, id) => {
            dispatch(sendMessages(message, id))
        },
        updateAllFriends : (page) => {
            dispatch(updateAllFriends(page))
        },
        deleteAllFriends: () => {
            dispatch(deleteAllFriends())
        },getAllMessages: (id) => {
            dispatch(getAllMessages(id))
        },
        deleteAllMessage: () => {
            dispatch(deleteAllMessage())
        }
    }
}



const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;