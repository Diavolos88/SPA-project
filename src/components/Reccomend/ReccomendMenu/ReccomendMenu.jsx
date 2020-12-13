import React from 'react';
import s from './ReccomendMenu.module.css';

const ReccomendMenu = (props) => {
	let classs = ''
	if (props.last) {
		classs = s.menu + ' ' + s.last;
	}
	else {
		classs = s.menu;
	}
	return (
		<div className={classs}>
			{props.menu}
		</div>
	);
}

export default ReccomendMenu;