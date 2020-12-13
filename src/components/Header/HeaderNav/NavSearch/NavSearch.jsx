import React from 'react';
import s from './NavSearch.module.css';

const NavSearch = (props) => {
	return (
		<div>
			<input type="text" className={s.search} placeholder="
Enter the title..."></input>
		</div>
	);
}

export default NavSearch;