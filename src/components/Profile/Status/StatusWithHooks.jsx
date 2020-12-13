import React, {useState, useEffect} from 'react'
import s from './Status.module.css';

const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusStage = (e) => {
        setStatus(e.currentTarget.value)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    if (!editMode) {
        return (
            <div>
                <span
                    onDoubleClick={activateEditMode}>{props.status ? props.status : '***Update status***'}</span>
            </div>
        );
    } else {
        return (
            <div>
                <input onChange={onStatusStage}
                       autoFocus={true} onBlur={deActivateEditMode} className={s.inputField}
                       value={status ? status : '***Update status***'}/>
            </div>
        );
    }
}

export default StatusWithHooks