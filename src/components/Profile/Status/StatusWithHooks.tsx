import React, {useState, useEffect} from 'react'
import s from './Status.module.css';

type propsType = {
    status: string
    isOwner: boolean
    updateUserStatus: Function
}

const StatusWithHooks = (props: propsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (!props.isOwner) {
            setEditMode(true)
        }
    }

    const onStatusStage = (e: any) => {
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
                    onDoubleClick={activateEditMode}>{props.status ? props.status : '***Use double-click for change status***'}</span>
            </div>
        );
    } else {
        return (
            <div>
                <input onChange={onStatusStage}
                       autoFocus={true} onBlur={deActivateEditMode} className={s.inputField}
                       value={status ? status : ''}/>
            </div>
        );
    }
}

export default StatusWithHooks