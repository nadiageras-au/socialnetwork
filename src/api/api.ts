import axios from "axios";
import {User_T} from "../redux/usersReducer";

type Response<T = {}> = {
    items: T[]
    error: null | any
    totalCount: number
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': "8d3af74f-7eef-4b17-a270-3306d1cf0e57"
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<Response<User_T>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(userId:number){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    },
    followUser(userId:number){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    }

}