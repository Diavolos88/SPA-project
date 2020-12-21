import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    setUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
    userProfileType
} from "../../redux/profileReducer";
import {Redirect, withRouter} from 'react-router-dom'
import {follow, unfollow} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let id = this.props.match.params.userId
        this.props.getUserProfile(id)
        this.props.setUserStatus(id)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        this.refreshProfile()
    }

    render = () => {
        return (
            <div>
                <Profile {...this.props} isOwner={!!this.props.match.params.userId} profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         lookingForAJob={this.props.profile ? this.props.profile.lookingForAJob: false}
                />
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUserProfile: (id: number) => void
    updateUserStatus: (status: string) => void
    setUserStatus: (status: string) => void
    savePhoto: (photoFile: string) => void
    saveProfile: (profile: userProfileType) => void
}

type MapStateToPropsType = {
    profile: userProfileType
    status: string
}

type OwnPropsType = {
    match: any
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType) => ({
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