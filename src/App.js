import React, {Suspense} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, Redirect} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import ReccomendContainer from "./components/Reccomend/ReccomendContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter,  Switch} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    // catchAllErrors(error) {
        // alert(error)
    // }

    componentDidMount() {
        this.props.initializeApp()
        // window.addEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader className="preloader"/>
        } else {
            return (
                <div className='app-wrapper'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' render={ () => <Redirect to={"profile"} />}/>
                        <Route exact path='/films' render={() => <ReccomendContainer/>}/>
                        {/*<Route path='/forum' render={() => <Forum store={props.store}/>}/>*/}
                        <Route path='/dialogs/:userId?' render={() => <Dialogs/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div className={"notFound"}>404 NOT FOUND</div>}/>
                    </Switch>
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
