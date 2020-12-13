import React from 'react';
import s from './User.module.css';

const User = (props) => {
	return (
		<div className={s.user}>
			<div className={s.name}>
				<div className={s.user__name}>{props.name}</div>
				<div className={s.ava}><img src={props.ava} alt="" /></div>
			</div>
			<div className={s.content}>
				<div className={s.content__title}>{props.title}</div>
				<div className={s.content__mes}>{props.mes}</div>
				<div className={s.footer}>
					<button className={s.content__but}>Comment</button>
					<button className={s.content__likes}>likes {props.likes}</button>
				</div>
			</div>
		</div>
	);
}

export default User;