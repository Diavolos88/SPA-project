import React from 'react';
import {
    changeCurrentPage, follow,
    getUsers, initialStateTypeUsersReduser,
    setUsers,
    toggleFollowingInProgress, unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";
import {
    getCurrentPageData,
    getFollowingInProgressData,
    getIsFetchingData, getPageSizeData, getTotalUsersCountData,
    getUsersData
} from "../../redux/usersSelectors";
import {Redirect} from "react-router-dom";
import {AppStateType} from '../../redux/reduxStore';

type MapStateToPropsType = {
    users: initialStateTypeUsersReduser
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUsers: Function
    setUsers: Function
    unfollow: (id: number) => void
    follow: (id: number) => void
    changeCurrentPage: Function
    toggleFollowingInProgress: Function
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class UserContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize)
    }

    getUsers = async () => {
        if (this.props.users.usersData && this.props.users.usersData.length === 0) {
            let data = await usersAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize)
            this.props.setUsers(data.items)
        }
    }
    onPageChenged = (e: number) => {
        this.props.getUsers(e, this.props.users.pageSize)
        this.props.changeCurrentPage(e)
    }
    render = () => {
        if (!this.props.isAuth) {
            return (<Redirect to={'/login'}/>)
        } else {
            return (<div>{this.props.users.isFetching ? <Preloader/> :
                <Users currentPage={this.props.users.currentPage}
                       totalUsersCount={this.props.users.totalUsersCount}
                       pageSize={this.props.users.pageSize}
                       usersData={this.props.users.usersData ? this.props.users.usersData : []}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.users.followingInProgress}
                       onPage={this.onPageChenged}/>}</div>);
        }
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        users: getUsersData(state),
        pageSize: getPageSizeData(state),
        totalUsersCount: getTotalUsersCountData(state),
        currentPage: getCurrentPageData(state),
        isFetching: getIsFetchingData(state),
        followingInProgress: getFollowingInProgressData(state)
    }
}

type OwnPropsType = {}

let UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    changeCurrentPage,
    toggleFollowingInProgress,
    getUsers,
    setUsers
})(UserContainer)


export default UsersContainer