import React, {useState} from 'react'
import s from './Profile.module.css';
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label className={s.label}>{label}</label>
        <div className={s.fieldInput}>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


const ProfileDataForm = (props) => {
    return (
        <form className={s.second__column} onSubmit={props.handleSubmit}>
            <div>Looking For A Job:</div>
            <Field name="lookingForAJob" type="checkbox" component={renderField} label="Find a job:"/>
            <Field name="lookingForAJobDescription" type="text" component={renderField} label="About my future work:"/>
            <Field name="fullName" type="text" component={renderField} label="Full name"/>
            <Field name="aboutMe" type="text" component={renderField} label="About me"/>
            <div>Contacts:</div>
            <Field name="contacts.github" type="text" component={renderField} label="github:"/>
            <Field name="contacts.vk" type="text" component={renderField} label="vk:"/>
            <Field name="contacts.facebook" type="text" component={renderField} label="facebook:"/>
            <Field name="contacts.instagram" type="text" component={renderField} label="instagram:"/>
            <Field name="contacts.twitter" type="text" component={renderField} label="twitter:"/>
            <Field name="contacts.website" type="text" component={renderField} label="website:"/>
            <Field name="contacts.youtube" type="text" component={renderField} label="youtube:"/>
            <Field name="contacts.mainLink" type="text" component={renderField} label="mainLink:"/>
            <div className={s.formSummaryError}>{props.error}</div>
            <div>
                <button className={s.editSaveBut}>Save</button>
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm