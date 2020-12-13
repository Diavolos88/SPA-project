import React from 'react';
import {
	addFilmCardActionCreator,
	changeDescriptionActionCreator, changeImgActionCreator,
	changeTitleActionCreator,
	changeYearActionCreator
} from "../../../redux/FilmReducer";
import AddFilm from "./AddFilm";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		inputValue: state.reccomendData.inputValue,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTitleChange: (title) => {
			dispatch(changeTitleActionCreator(title))
		},
		onDescriptionChange: (description) => {
			dispatch(changeDescriptionActionCreator(description))
		},
		onYearChange: (year) => {
			dispatch(changeYearActionCreator(year))
		},
		onImgChange: (img) => {
			dispatch(changeImgActionCreator(img))
		},
		addFilmCard: () => {
			dispatch(addFilmCardActionCreator())
		}
	}
}

const AddFilmContainer = connect(mapStateToProps, mapDispatchToProps)(AddFilm)

export default AddFilmContainer;