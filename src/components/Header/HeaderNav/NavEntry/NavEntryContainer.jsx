import React from 'react';
import NavEntry from "./NavEntry";
import {connect} from "react-redux";
import {logout} from "../../../../redux/authReducer";

class NavEntryContainer extends React.Component {
    render = () => {
        return (
            <NavEntry isAuth={this.props.isAuth}
                      login={this.props.login}
                      ava={this.props.ava}
                      logout={this.props.logout} />
        );
    }

}

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
            ava: state.auth.authAva
        }
    );
}

export default connect(mapStateToProps, {logout})(NavEntryContainer);