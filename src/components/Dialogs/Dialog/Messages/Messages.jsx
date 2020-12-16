import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
	return (
		<div className={!props.classMe ? s.mes : s.mes + " " + s.mesForMe}>
			<span>{props.mes}</span>
		</div>
	);
}

export default Messages;