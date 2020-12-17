import * as axios from "axios"

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '8590e90d-01e0-4847-847c-db8ee78fb5fe'}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    follow(id) {
        return instans.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instans.delete(`follow/${id}`).then(response => response.data)
    },
    author() {
        return instans.get(`auth/me/`).then(response => response.data)
    },
    getOneUser(id) {
        return instans.get(`profile/` + id).then(response => response.data)
    },
    getUserStatus(id) {
        return instans.get(`profile/status/` + id).then(response => response).then(response => response.data)
    },
    updateUserStatus(status) {
        return instans.put(`profile/status`, {status: status})
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instans.post(`auth/login`, {
            email, password, rememberMe, captcha
        })
    },
    logout() {
        return instans.delete(`auth/login`)
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instans.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instans.put(`profile/`, profile)
    },
    getFriends(page) {
        return instans.get(`users?page=${page}&friend=${true}`
        ).then(response => response.data)
    },
    getMessages(id) {
        return instans.get(`dialogs/${id}/messages`
        ).then(response => response.data)
    },
    sendNewMessages(message, id) {
        return instans.post(`dialogs/${id}/messages`, {body: message}
        )
    },
    checkNewMessages() {
        return instans.get(`dialogs/messages/new/count`).then(response => response.data)
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instans.put(`/security/get-captcha-url`)
    }
}