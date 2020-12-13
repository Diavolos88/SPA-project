import React from 'react';
import {connect} from "react-redux";
import Reccomend from "./Reccomend";

const mapStateToProps = (state) => {
	return {
		cards: state.reccomendData.cards,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const ReccomendContainer = connect(mapStateToProps, mapDispatchToProps)(Reccomend)

export default ReccomendContainer;