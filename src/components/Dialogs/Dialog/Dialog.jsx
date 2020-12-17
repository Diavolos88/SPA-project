import React from 'react';
import s from './Dialog.module.css';
import {reset, Field, reduxForm} from "redux-form";
import {updateAllFriends} from "../../../redux/dialogReducer";
import Friends from "./Friends/Friends";
import {Link, animateScroll as scroll} from "react-scroll"
import minion from '../../../img/minion.png'
import Messages from "./Messages/Messages";
import {usersAPI} from "../../../api/api";

class Dialog extends React.Component {

    constructor() {
        super()
        this.state = {
            countPage: 1,
            id: 0,
            timerID: 0,
            el: 0
        }
    }

    componentDidMount() {
        this.props.deleteAllMessage()
        this.props.updateAllFriends(this.state.countPage)
        this.state.timerID = setInterval(
            () => {
                usersAPI.checkNewMessages().then((response) => {
                    if (response) {
                        this.props.deleteAllMessage()
                        this.props.getAllMessages(this.state.id)
                    }
                })
            },
            1000
        );
    }

    componentDidUpdate() {
        if (this.props.friendData.length > 0 && this.state.id == 0) {
            this.state.id = this.props.friendData[0].id
            this.props.getAllMessages(this.state.id)
        }
    }

    componentWillUnmount() {
        this.props.deleteAllFriends()
        clearInterval(this.state.timerID);
    }

    loadFriends = () => {
        this.state.countPage = this.state.countPage + 1
        this.props.updateAllFriends(this.state.countPage)

    }
    loadMessages = (id) => () => {
        this.props.deleteAllMessage()
        this.props.getAllMessages(id)
        this.state.id = id
    }


    render() {
        if (this.props.friendData.length > 0) {
            let mesElements
            debugger
            let friendElements = this.props.friendData.map(frined => <Friends loadMessages={this.loadMessages}
                                                                              name={frined.name} id={frined.id}
                                                                              img={frined.photos.small ? frined.photos.small : minion}/>)

            if (this.props.mesData.length > 0) {
                mesElements = this.props.mesData.map((mes) => {
                    if (mes.recipientId === this.state.id) {
                        return <Messages mes={mes.body} id={mes.id}/>
                    } else if (mes.senderId === this.state.id) {
                        return <Messages classMe={true} mes={mes.body} id={mes.id}/>
                    }
                })
            }
            let addNewMessage = (values) => {
                this.props.deleteAllMessage()
                this.props.sendMessages(values.newMessage, this.state.id)
            }

            return (
                <div className={s.win}>
                    <div className={s.dialog}>
                        <div>
                            <div className={s.friends}>
                                {friendElements}
                            </div>
                            <div>
                                <button onClick={this.loadFriends} className={s.buttonLoadFriends}>Load friends
                                </button>
                            </div>
                        </div>
                        <PrintMessages mesElements={mesElements}/>
                    </div>
                    <div className={s.sendFild}>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            );
        } else {
            return <div className={s.noOne}>
                Follow someone firstly
            </div>
        }

    }
}

class PrintMessages extends React.Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className={s.mess}>
                {this.props.mesElements}
                <div ref={el => { this.messagesEnd = el}}></div>
            </div>);
    }
}

const
    AddMessageForm = (props) => {
        return (
            <form className={s.formC} onSubmit={props.handleSubmit}>
                <button className={s.sendMesBut}>Send Message</button>
                <Field name={"newMessage"} component={"textarea"} placeholder={"Enter your message"}
                       className={s.textArea}></Field>
            </form>
        );
    }
const afterSubmit = (result, dispatch) => dispatch(reset('dialogAddMessageForm'));

const
    AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm", onSubmitSuccess: afterSubmit,})(AddMessageForm)

export default Dialog;