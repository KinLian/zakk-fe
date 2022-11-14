const signUpAlert = (response: any) => {
    if (Object.keys(response).includes("ok")) {
        alert(response["ok"])
    }
    else if (Object.keys(response).includes("error")) {
        alert(response["error"])
    }
    else {
        alert(response)
    }
}

export { signUpAlert }