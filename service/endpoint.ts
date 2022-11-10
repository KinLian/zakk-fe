const url: string = process.env.URL || "localhost:4000/api"

const getAPI = (baseURL: string) =>
    (endpoint: string) =>
        async (callback: any, detail = "", setting?: object) => {
            try {
                const response = await fetch(`${baseURL}/${endpoint}/${detail}`, setting)
                const json = await response.json()
                return callback(json)
            }
            catch (error) {
                return callback(error)
            }
        }

const baseURLAPI = getAPI(url)
const fetchUsers = baseURLAPI("users")

interface LoginData {
    email: string,
    password: string
}

interface SignUpData extends LoginData {
    username: string,
    name : string
}

export const signup = (data: SignUpData, callback: any) =>
    fetchUsers(callback, "signup",
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
