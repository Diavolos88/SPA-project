import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
	const urlMessages = '/dialogs/' + props.id
	const urlProfile = '/profile/' + props.id
	let classNameFirst
	if (props.first) {
		classNameFirst = s.link + " " + s.activeLink
	} else {
		classNameFirst = s.link
	}

	return (
		<div onClick={props.loadMessages(props.id)} className={s.friend}>
			<NavLink to={urlProfile} ><img className={s.image} src={props.img} alt="" /></NavLink>
			<NavLink className={classNameFirst} to={urlMessages} activeClassName={s.activeLink} >{props.name}</NavLink>
		</div>
	);
}

export default Friends;