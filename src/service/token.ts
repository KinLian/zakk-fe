const TOKEN_KEY: string = "TOKEN";
const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = (newToken: string) => localStorage.setItem(TOKEN_KEY, newToken)
const deleteToken = () => localStorage.removeItem(TOKEN_KEY)

export { getToken, setToken, deleteToken }