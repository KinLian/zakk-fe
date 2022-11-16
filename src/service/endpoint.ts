import axios from "axios"

const url: string = process.env.URL || "http://localhost:4000/api"

const baseAxios = axios.create({ baseURL: url })

baseAxios.interceptors.response.use((response) => {
    // Do something with response data
    return response.status == 200 ? response['data'] : response
}, (error) => {
    // Do something with response error
    return Promise.reject(error);
});

baseAxios.interceptors.request.use((request) => {
    // todo: each request, put bearer if there is a token
    return request
}, (error) => {
    return Promise.reject(error);
})

export const signup = (data: object) => baseAxios.post("users/register", data)
export const login = (data: object) => baseAxios.post("users/login", data)

