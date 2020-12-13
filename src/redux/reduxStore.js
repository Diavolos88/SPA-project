import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import postsReducer from "./postsReducer";
import filmReducer from "./FilmReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsData: dialogReducer,
    reccomendData: filmReducer,
    postsData: postsReducer,
    usersData: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

// this._state.reccomendData.inputValue = inputFilmReducer(this._state.reccomendData.inputValue, action)
// this._state.dialogsData.inputValue = inputMessageReducer(this._state.dialogsData.inputValue, action)
