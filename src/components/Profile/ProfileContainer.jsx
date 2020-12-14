import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserStatus, updateUserStatus, savePhoto, saveProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from 'react-router-dom'
import {follow, unfollow} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let id = this.props.match.params.userId
        this.props.getUserProfile(id)
        this.props.setUserStatus(id)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
            this.refreshProfile()
    }

    render = () => {
        return (
            <div>
                <Profile {...this.props} isOwner={!!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUserProfile,
        updateUserStatus,
        setUserStatus,
        savePhoto,
        saveProfile
    })
)(ProfileContainer)