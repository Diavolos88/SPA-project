import React from 'react';
import {addMessage} from "../../../redux/dialogReducer";
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
        addNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}



const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;