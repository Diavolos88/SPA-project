import React from 'react';
import s from './Reccomend.module.css';
import ReccomendItem from './ReccomendItem/ReccomendItem';
import ReccomendMenu from './ReccomendMenu/ReccomendMenu';
import AddFilmContainer from "./AddFilm/AddFilmContainer";

const Reccomend = (props) => {
	let reccomendElements = props.cards.map(card => <ReccomendItem img={card.img} description={card.description} title={card.title} year={card.year} />)
	return (
		<div className={s.rec}>
			<div className={s.title}>Reccomend for watching</div>
			<div className={s.tabs}>
				<div></div>
				<ReccomendMenu menu='Films' />
				<ReccomendMenu menu='Serials' />
				<ReccomendMenu menu='Cartoons' />
				<ReccomendMenu menu='Anime' />
				<ReccomendMenu menu='Documentary' last='last' />
				<div></div>
			</div>
			<div className={s.items}>
				{reccomendElements}
			</div>
			<div className={s.addFilms}>
				<AddFilmContainer />
			</div>
		</div>
	);
}

export default Reccomend;