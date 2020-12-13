import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    page: 5,
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            let copy = {...state}
            copy.usersData = [...action.users]
            return copy
        }
        case SET_CURRENT_PAGE: {
            let copy = {...state}
            copy.currentPage = action.currentPage
            return copy
        }
        case SET_TOTAL_COUNT: {
            let copy = {...state}
            copy.totalUsersCount = action.totalCount
            return copy
        }
        case TOGGLE_IS_FETCHING: {
            let copy = {...state}
            copy.isFetching = action.isFetching
            return copy
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            let copy = {...state}
            copy.followingInProgress = action.followingInProgress
            return copy
        }
        default:
            return state
    }
}

export const followSuccess = (id) => {
    return {type: FOLLOW, userId: id}
}

export const toggleFollowingInProgress = (followingInProgress) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress}
}

export const unfollowSuccess = (id) => {
    return {type: UNFOLLOW, userId: id}
}

export const changeCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users: users}
}

export const setTotalCountPage = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
            dispatch(setTotalCountPage(data.totalCount))
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        usersAPI.follow(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(id))
            }
        })
        dispatch(toggleFollowingInProgress(false))
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        usersAPI.unfollow(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
        })
        dispatch(toggleFollowingInProgress(false))
    }
}

export default usersReduser