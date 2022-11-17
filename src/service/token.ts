const TOKEN_KEY: string = "TOKEN";
// TODO: handle when the token is null
const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = (newToken: string) => localStorage.setItem(TOKEN_KEY, newToken)
const deleteToken = () => localStorage.removeItem(TOKEN_KEY)

export { getToken, setToken, deleteToken }