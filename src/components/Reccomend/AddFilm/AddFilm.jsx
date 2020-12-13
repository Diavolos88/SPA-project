import React from 'react';
import s from './AddFilm.module.css';


const AddFilm = (props) => {

	let newPostTitle = React.createRef()
	let newPostYear = React.createRef()
	let newPostDescription = React.createRef()
	let newPostImg = React.createRef()

	let onTitleChange = () => {
		let title = newPostTitle.current.value
		props.onTitleChange(title)
	}

	let onDescriptionChange = () => {
		let description = newPostDescription.current.value
		props.onDescriptionChange(description)
	}

	let onYearChange = () => {
		let year = newPostYear.current.value
		props.onYearChange(year)
	}

	let onImgChange = () => {
		let img = newPostImg.current.value
		props.onImgChange(img)
	}

	let addFilmCard = () => {
		props.addFilmCard()
	}
	return (
		<div className={s.addFilm}>
			<div ></div><div className={s.title}>Add film</div>
			<span className={s.fild}>title : </span><input onChange={onTitleChange} value={props.inputValue.titleValue} ref={newPostTitle} type='text' ></input>
			<span className={s.fild}>year : </span><input onChange={onYearChange} value={props.inputValue.yearValue} ref={newPostYear} type='number' ></input>
			<span className={s.fild}>img : </span><input onChange={onImgChange} value={props.inputValue.imgValue} ref={newPostImg} type='text' ></input>
			<span className={s.fild}>description : </span><textarea className={s.area} onChange={onDescriptionChange} value={props.inputValue.descriptionValue} ref={newPostDescription} ></textarea>
			<div></div><button onClick={addFilmCard} className={s.addButton}>Add</button>
		</div>

	);
}

export default AddFilm;