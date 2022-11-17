import { signup, fetchToken,getUser } from "./endpoint"
import { setToken, getToken, deleteToken } from "./token"

const login = async (data: object) => {
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


export { login, signup, setToken, getToken, deleteToken,getUser }