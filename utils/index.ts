export const handleResponse = (response: any) => {
    if (Object.keys(response).includes("ok")) {
        return response['ok']
    }
    else if (Object.keys(response).includes("error")) {
        return response['error']
    }
    else {
        return response
    }
}

export const compose = (f: any, g: any) => (x: any) => f(g(x))