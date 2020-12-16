import React from 'react';
import s from './Dialogs.module.css';
import DialogContainer from "./Dialog/DialogContainer";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogContainer/>
        </div>
    );
}
export default Dialogs;