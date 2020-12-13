import React from 'react';
import s from './Dialog.module.css';
import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialog = (props) => {

    let friendElements = props.friendData.map(frined => <Friends name={frined.name} id={frined.id} img={frined.img}/>)
    let mesElements = props.mesData.map((mes) => <Messages mes={mes.mes} id={mes.id}/>)

    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessage)
    }
    if (!props.isAuth) {
        return (<Redirect to={'/login'}/>)
    }
    return (
        <div>
            <div className={s.dialog}>
                <div className={s.friends}>
                    {friendElements}
                </div>
                <div className={s.mess}>
                    {mesElements}
                </div>
            </div>
            <div className={s.sendFild}>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form className={s.formC} onSubmit={props.handleSubmit}>
            <button className={s.sendMesBut}>Send Message</button>
            <Field name={"newMessage"} component={"textarea"} placeholder={"Enter your message"}
                   className={s.textArea}></Field>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialog;