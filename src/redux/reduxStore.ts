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

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
