import React from 'react';
import s from './ReccomendItem.module.css';

const ReccomendItem = (props) => {
	return (
		<div className={s.item}>
			<div className={s.item__img}><img src={props.img} alt="" /></div>
			<div className={s.content}>
				<div className={s.title}>{props.title}</div>
				<div className={s.year}>{props.year}</div>
				<div className={s.disc}>{props.description}</div>
				<div className={s.but}><button>Click me</button></div>
			</div>
		</div>

	);
}

export default ReccomendItem;