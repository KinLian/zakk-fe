const url: string = process.env.URL || "http://localhost:4000/api"

const getAPI = (baseURL: string) =>
    (endpoint: string) =>
        async (callback: any, detail = "", setting?: object) => {
            const fullURL = new URL(`${baseURL}/${endpoint}/${detail}`)
            try {
                const response = await fetch(fullURL, setting)
                const json = await response.json()
                return callback(json)
            }
            catch (error) {
                return callback(error)
            }
        }

const baseURLAPI = getAPI(url)
const fetchUsers = baseURLAPI("users")

export const signup = (data: object, callback: any) =>
    fetchUsers(callback, "register",
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

export const login = (data: object, callback: any) =>
    fetchUsers(callback, "login",
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
