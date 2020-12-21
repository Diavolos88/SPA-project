import { reducersType } from "./reduxStore"


export const getUsersData = (state: reducersType) => {
    // @ts-ignore
    return state.usersData
}

export const getPageSizeData = (state: reducersType) => {
    // @ts-ignore
    return state.pageSize
}

export const getTotalUsersCountData = (state: reducersType) => {
    // @ts-ignore
    return state.totalUsersCount
}

export const getCurrentPageData = (state: reducersType) => {
    // @ts-ignore
    return state.currentPage
}

export const getIsFetchingData = (state: reducersType) => {
    // @ts-ignore
    return state.isFetching
}

export const getFollowingInProgressData = (state: reducersType) => {
    // @ts-ignore
    return state.followingInProgress
}

