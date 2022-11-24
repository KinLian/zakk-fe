import { fetchToken, signUpAPI } from "./endpoint"
import { setToken } from "./token"

export const login = async (data: object) => {
    try {
        const response = await fetchToken(data)
        const token = response['data']['token']
        setToken(token)
        return true
    }
    catch (error) {
        alert(error)
    }
}

export const signup = async (data: object) => {
    try {
        const response = await signUpAPI(data)
        const responseData: string = response['data']
        alert(responseData)
    }
    catch (error) {
        alert(error)
    }
}