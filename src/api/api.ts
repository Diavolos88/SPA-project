import * as axios from "axios"

let API1 = '8590e90d-01e0-4847-847c-db8ee78fb5fe'
let API2 = '22395bfc-7398-496d-9f45-225bad08b7ff'
let API3 = '9231f2ee-2112-4390-9b16-f5a875f052b1'

// @ts-ignore
let instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": API1
    }
});

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 4) {
        let data = await instans.get(`users?page=${currentPage}&count=${pageSize}`)
        return data.data
    },
    async follow(id: number) {
        let data = await instans.post(`follow/${id}`)
        return data.data
    },
    async unfollow(id: number) {
        let data = await instans.delete(`follow/${id}`)
        return data.data
    },
    author() {
        // @ts-ignore
        return instans.get(`auth/me/`).then(response => {
            if (response.data.data.id === 13370) {
                // @ts-ignore
                instans = axios.create({
                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                    withCredentials: true,
                    headers: {
                        "API-KEY": API2
                    }
                });
            } else if (response.data.data.id === 13292) {
                // @ts-ignore
                instans = axios.create({
                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                    withCredentials: true,
                    headers: {"API-KEY": API3}
                });
            } else {
                // @ts-ignore
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
    async getOneUser(id: number) {
        let data = await instans.get(`profile/` + id)
        return data.data
    },
    async getUserStatus(id: number) {
        let data = await instans.get(`profile/status/` + id)
        return data.data
    },
    updateUserStatus(status: string): any {
        return instans.put(`profile/status`, {status: status})
    },
    login(email: string, password: string, rememberMe = false, captcha?: any): any {
        return instans.post(`auth/login`, {
            email, password, rememberMe, captcha
        })
    },
    logout() {
        return instans.delete(`auth/login`)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instans.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any): any {
        return instans.put(`profile/`, profile)
    },
    async getFriends(page: any) {
        let data = await instans.get(`users?page=${page}&friend=${true}`)
        return data.data
    },
    async getMessages(id: number) {
        let data = await instans.get(`dialogs/${id}/messages`)
        return data.data
    },
    sendNewMessages(message: string, id: number): any {
        return instans.post(`dialogs/${id}/messages`, {body: message})
    },
    async checkNewMessages() {
        let data = await instans.get(`dialogs/messages/new/count`)
        return data.data
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instans.put(`/security/get-captcha-url`)
    }
}