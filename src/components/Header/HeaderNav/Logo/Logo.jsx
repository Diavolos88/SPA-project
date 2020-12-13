import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = (props) => {
	return (
		<div className={s.logo}>
			<NavLink to='/'>{props.logo}</NavLink>
		</div>
	);
}

export default Logo;