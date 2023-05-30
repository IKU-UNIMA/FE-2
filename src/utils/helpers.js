import jwt_decode from "jwt-decode";

// path
const encodeNamePath = btoa("path")

export const setPath = (path) => {
    const encodePath = btoa(path)
    const pathname = localStorage.setItem(encodeNamePath, encodePath)
    return pathname
}

export const getPath = () => {
    const pathname = localStorage.getItem(encodeNamePath)
    const decodepath = atob(pathname)
    return decodepath
}

// token local storage

export const getToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const setToken = (tokens) => {
    const token = localStorage.setItem("token", tokens)
    return token
}

// token session storage

export const setSessionToken = (sessionToken) => {
    const token = sessionStorage.setItem("token", sessionToken)
    return token
}

export const getSessionToken = () => {
    const token = sessionStorage.getItem("token")
    return token
}

// decode token dari jwt

export const tokenData = () => {
    try {
        const data = jwt_decode(getSessionToken())
        return data
    } catch (error) {
        return error
    }
}

// export const tokenDataExist = (dataExist) => {
//     return dataExist
// }

// export const tokenDataError = (error) => {
//     return error
// }