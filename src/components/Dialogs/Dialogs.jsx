import React from 'react';
import s from './Dialogs.module.css';
import DialogContainer from "./Dialog/DialogContainer";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogContainer store={props.store}/>
		</div>
	);
}
export default Dialogs;