import React, {Suspense} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import ReccomendContainer from "./components/Reccomend/ReccomendContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
// import UsersContainer from "./components/Users/UsersContainer";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader className="preloader"/>
        } else {
            return (
                <div className='app-wrapper'>
                    <Header/>
                    <Route exact path='/' render={() => <ReccomendContainer/>}/>
                    {/*<Route path='/forum' render={() => <Forum store={props.store}/>}/>*/}
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    });
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
;
