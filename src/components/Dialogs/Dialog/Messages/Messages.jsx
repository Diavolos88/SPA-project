import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
	return (
		<div className={s.mes}>
			<span>{props.mes}</span>
		</div>
	);
}

export default Messages;