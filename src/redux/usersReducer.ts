import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [[]],
    page: 5,
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

type initialStateType = typeof initialState

const usersReduser = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    // @ts-ignore
                    if (action.userId === u.id) {
                        // @ts-ignore
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
                    // @ts-ignore
                    if (action.userId === u.id) {
                        // @ts-ignore
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...action.users]
            }
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

export const followSuccess = (id: number) => {
    return {type: FOLLOW, userId: id}
}

type toggleFollowingInProgressType = {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: boolean}

export const toggleFollowingInProgress = (followingInProgress: boolean): toggleFollowingInProgressType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress}
}

type unfollowSuccessType = {type: typeof UNFOLLOW, userId: number}

export const unfollowSuccess = (id: number): unfollowSuccessType => {
    return {type: UNFOLLOW, userId: id}
}

type changeCurrentPageType = {type: typeof SET_CURRENT_PAGE, currentPage: number}

export const changeCurrentPage = (currentPage: number): changeCurrentPageType => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}

type toggleIsFetchingType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}

type setUsersType = {type: typeof SET_USERS, users: any}

export const setUsers = (users: any): setUsersType => {
    return {type: SET_USERS, users: users}
}

type setTotalCountPageType = {type: typeof SET_TOTAL_COUNT, totalCount: number}

export const setTotalCountPage = (totalCount: number): setTotalCountPageType => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
            dispatch(setTotalCountPage(data.totalCount))
        })
    }
}

export const follow = (id: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true))
        usersAPI.follow(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(id))
            }
        })
        dispatch(toggleFollowingInProgress(false))
    }
}

export const unfollow = (id: number) => {
    return (dispatch: any) => {
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