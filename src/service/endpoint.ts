import axios from "axios"
import { getToken } from "./token"
import { config } from "@/config"

const baseAxios = axios.create(config.development)

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


export const signUpAPI = (data: object) => baseAxios.post("users/register", data)
export const fetchToken = (data: object) => baseAxios.post("users/login", data)
export const getUser = () => baseAxios.get("users")
