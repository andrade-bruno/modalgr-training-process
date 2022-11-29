import httpService from "./http"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

function login({ email, password }) {
    return httpService.get(`/users?email=${email}&password=${password}`, config)
}

const userService = {
    login
}

export default userService