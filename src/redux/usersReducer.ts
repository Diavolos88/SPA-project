import {usersAPI} from "../api/api";
import {AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type ThunkType = ThunkAction<Promise<void>, AppStateType, void, ActionsTypes>

export type usersDataType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        "small": null | string,
        "large": null | string
    },
    status: null | string,
    followed: boolean
}

let initialState: initialStateTypeUsersReduser = {
    usersData: [],
    page: 5,
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

export type initialStateTypeUsersReduser = {
    usersData?: Array<usersDataType>,
    page: number,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
}

const usersReduser = (state: initialStateTypeUsersReduser = initialState, action: ActionsTypes): initialStateTypeUsersReduser => {
    switch (action.type) {
        case FOLLOW: {
            if (state.usersData) {
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
            return state
        }
        case UNFOLLOW: {
            if (state.usersData) {
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
            return state
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

type ActionsTypes = followSuccessType | toggleFollowingInProgressType | unfollowSuccessType | changeCurrentPageType
    | toggleIsFetchingType | setUsersType |  setTotalCountPageType

type followSuccessType = {type: typeof FOLLOW, userId: number}

export const followSuccess = (id: number): followSuccessType => {
    return {type: FOLLOW, userId: id}
}

type toggleFollowingInProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: boolean }

export const toggleFollowingInProgress = (followingInProgress: boolean): toggleFollowingInProgressType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress}
}

type unfollowSuccessType = { type: typeof UNFOLLOW, userId: number }

export const unfollowSuccess = (id: number): unfollowSuccessType => {
    return {type: UNFOLLOW, userId: id}
}

type changeCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }

export const changeCurrentPage = (currentPage: number): changeCurrentPageType => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}

type toggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}

type setUsersType = { type: typeof SET_USERS, users: Array<usersDataType> }

export const setUsers = (users: Array<usersDataType>): setUsersType => {
    return {type: SET_USERS, users: users}
}

type setTotalCountPageType = { type: typeof SET_TOTAL_COUNT, totalCount: number }

export const setTotalCountPage = (totalCount: number): setTotalCountPageType => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
        dispatch(setTotalCountPage(data.totalCount))
    }
}

export const follow = (id: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        let response = await usersAPI.follow(id)
        if (response.resultCode === 0) {
            dispatch(followSuccess(id))
        }
        dispatch(toggleFollowingInProgress(false))
    }
}

export const unfollow = (id: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        let response = await usersAPI.unfollow(id)
        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(id))
        }
        dispatch(toggleFollowingInProgress(false))
    }
}

export default usersReduser