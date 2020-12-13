import React from 'react';
import {
    changeCurrentPage, follow,
    getUsers,
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

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize)
    }

    getUsers = () => {
        if (this.props.users.usersData.length === 0) {
            usersAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize).then(data => {
                this.props.setUsers(data.items)
            })
        }
    }
    onPageChenged = (e) => {
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
                       usersData={this.props.users.usersData}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.users.followingInProgress}
                       onPage={this.onPageChenged}/>}</div>);
        }
    }

}

let mapStateToProps = (state) => {
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

let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    changeCurrentPage,
    toggleFollowingInProgress,
    getUsers,
})(UserContainer)


export default UsersContainer