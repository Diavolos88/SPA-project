import React from 'react'
import s from './Profile.module.css';
import StatusWithHooks from "./Status/StatusWithHooks";
import minion from "../../img/minion.png"

let Profile = (props) => {
    if (!props.profile) {
        return (<div></div>);
    } else {
        let contact = []
        for (let key in props.profile.contacts) {
            if (props.profile.contacts[key]) {
                contact.push(<div className={s.contacts__item}>{props.profile.contacts[key]}</div>)
            }
        }
        return (
            <div className={s.profile}>
                <div className={s.first__column}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : minion}></img>
                    <button>Send message</button>
                </div>
                <div className={s.second__column}>
                    <span>Status: </span>
                    <StatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                    <span>About me: </span>
                    <div className={s.aboutMe}>{props.profile.aboutMe ? props.profile.aboutMe : "without about me"}</div>
                    <span>Contacts: </span>
                    <div className={s.contacts}>{contact.length !== 0 ?  contact : "without contact"}</div>
                </div>
            </div>
        );
    }

}

export default Profile