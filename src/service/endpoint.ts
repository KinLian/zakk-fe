import axios from "axios"
import { getToken } from "./token"

const url: string = process.env.URL || "http://localhost:4000/api"

const baseAxios = axios.create({ baseURL: url })

baseAxios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers = {
            ...config.headers,
            authorization: `Bearer ${getToken()}`
        }
    }
    return config
}, (error) => {
    return Promise.reject(error);
})


export const signup = (data: object) => baseAxios.post("users/register", data)
export const fetchToken = (data: object) => baseAxios.post("users/login", data)
export const getUser = () => baseAxios.get("users")
