import React, {useState} from 'react'
import s from './Profile.module.css';
import StatusWithHooks from "./Status/StatusWithHooks";
import minion from "../../img/minion.png"
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {NavLink, Redirect} from "react-router-dom";
import {userProfileType} from '../../redux/profileReducer';

type propsType = {
    status: string
    updateUserStatus: Function
    isOwner: boolean
    lookingForAJob: boolean
    profile: userProfileType
    goToEditMode: () => void
    contact: Array<JSX.Element>
}

let ProfileData = (props: propsType) => {
    return (
        <div className={s.second__column}>
            <span>Status:</span>
            <div className={s.statusField}><StatusWithHooks status={props.status}
                                                            updateUserStatus={props.updateUserStatus}
                                                            isOwner={props.isOwner}/></div>
            <span>Looking for a job : {props.profile.lookingForAJob ? "Yes" : "No"}</span>
            <span>About my future work: <div
                className={s.lookingForAJobDesc}>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : "No"}</div></span>
            <span>About me: </span>
            <div className={s.aboutMe}>{props.profile.aboutMe ? props.profile.aboutMe : "***without about me***"}</div>
            <span>Contacts: </span>
            <div className={s.contacts}>{props.contact.length !== 0 ? props.contact : "***without contact***"}</div>
            {!props.isOwner ? <button className={s.editSaveBut} onClick={props.goToEditMode}>edit</button> :
                <div></div>}
        </div>
    );
}

type propsProfileType = {
    saveProfile: Function
    savePhoto: Function
    profile: userProfileType
    isOwner: boolean
    status: string
    updateUserStatus: Function
    lookingForAJob: boolean
}

let Profile = (props: propsProfileType) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (e: any) => {
        props.saveProfile(e).then(() => {
            setEditMode(false)
        })
    }

    let toggleEditMode = () => {
        setEditMode(true)
    }

    const onMainPhotoSelector = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return (<div></div>);
    } else {
        let contact = []
        for (let key in props.profile.contacts) {
            // @ts-ignore
            if (props.profile.contacts[key]) {
                // @ts-ignore
                contact.push(<div className={s.contacts__item}>{key + ": "}{props.profile.contacts[key]}</div>)
            }
        }
        return (
            <div className={s.profile}>
                <div className={s.first__column}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : minion}></img>
                    {!props.isOwner ? <div className={s.changePhotoText}>Change photo (only png or jpeg formats)<input
                            className={s.changePhotoFile} onChange={onMainPhotoSelector} type={"file"}/></div>
                        : <NavLink to={"/dialogs/"}>
                            <div className={s.sendMessagesTo}>Send message</div>
                        </NavLink>
                    }
                </div>
                {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} {...props} onSubmit={onSubmit}/>
                    : <ProfileData {...props} goToEditMode={toggleEditMode} contact={contact}/>}
            </div>
        );
    }

}


export default Profile