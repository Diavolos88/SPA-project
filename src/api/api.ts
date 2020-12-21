import axios, {AxiosResponse} from "axios"
import {userProfileType} from "../redux/profileReducer";

let API1 = '8590e90d-01e0-4847-847c-db8ee78fb5fe'
let API2 = '22395bfc-7398-496d-9f45-225bad08b7ff'
let API3 = '9231f2ee-2112-4390-9b16-f5a875f052b1'

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type loginResponseType = {
    data: {
        Userid: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type authorResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

let instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": API1
    }
});


type getUsersResponseType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

type ArrayUsersType = {
    items: Array<getUsersResponseType>
    totalCount: number
    error: null | string
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`
        ).then<ArrayUsersType>(response => response.data)
    },
    follow(id: number) {
        return instans.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id: number) {
        return instans.delete(`follow/${id}`).then(response => response.data)
    },
    author() {
        return instans.get<authorResponseType>(`auth/me/`).then(response => {
            if (response.data.data.id === 13370) {
                instans = axios.create({
                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                    withCredentials: true,
                    headers: {
                        "API-KEY": API2
                    }
                });
            } else if (response.data.data.id === 13292) {
                instans = axios.create({
                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                    withCredentials: true,
                    headers: {"API-KEY": API3}
                });
            } else {
                instans = axios.create({
                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                    withCredentials: true,
                    headers: {
                        "API-KEY": API1
                    }
                });
            }
            return response.data
        })
    },
    getOneUser(id: number) {
        return instans.get<userProfileType>(`profile/` + id).then(response => response.data)
    },
    getUserStatus(id: number) {
        return instans.get(`profile/status/` + id).then(response => response).then<string>(response => response.data)
    },
    updateUserStatus(status: string) {
        return instans.put(`profile/status`, {status: status})
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        return instans.post<loginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instans.delete(`auth/login`)
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instans.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: userProfileType) {
        return instans.put(`profile/`, profile)
    },
    getFriends(page: number) {
        return instans.get<ArrayUsersType>(`users?page=${page}&friend=${true}`
        ).then(response => response.data)
    },
    getMessages(id: number) {
        return instans.get<getMessagesResponseType>(`dialogs/${id}/messages`)
    },
    sendNewMessages(message: string, id: number) {
        return instans.post(`dialogs/${id}/messages`, {body: message}
        )
    },
    checkNewMessages() {
        return instans.get(`dialogs/messages/new/count`).then<string>(response => response.data)
    }
}

export type getMessagesResponseItemType = {
    id:string,
    body: string
    translatedBody: null | string
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}

type getMessagesResponseType = {
    items: Array<getMessagesResponseItemType>
    totalCount: number
    error: null | string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instans.put(`/security/get-captcha-url`)
    }
}