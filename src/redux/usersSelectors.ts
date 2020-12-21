import { AppStateType } from "./reduxStore"
import {initialStateTypeUsersReduser} from "./usersReducer";


export const getUsersData = (state: AppStateType): initialStateTypeUsersReduser => {
    return state.usersData
}

export const getPageSizeData = (state: AppStateType): number => {
    return state.usersData.pageSize
}

export const getTotalUsersCountData = (state: AppStateType): number => {
    return state.usersData.totalUsersCount
}

export const getCurrentPageData = (state: AppStateType): number => {
    return state.usersData.currentPage
}

export const getIsFetchingData = (state: AppStateType): boolean => {
    return state.usersData.isFetching
}

export const getFollowingInProgressData = (state: AppStateType): boolean => {
    return state.usersData.followingInProgress
}

