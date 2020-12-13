import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.css';

const NavMenu = (props) => {
	let url = "/" + props.name.toLowerCase();
	return (
		<div className={s.menu}>
			<NavLink to={url} activeClassName={s.activeLink} >{props.name}</NavLink>
		</div>
	);
}

export default NavMenu;