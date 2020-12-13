import store from './redux/reduxStore'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App store={store}/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

window.store = store

reportWebVitals();
