import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3001/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = (params) => {
        console.log(params)
        return this.service.post('/signup', params)
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)

    }

    login = (username, password) => {
        console.log(username, password, "login")

        return this.service.post('/login', { username, password })
            .then(response => {
                console.log("login")
                return response.data
            })
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

}

export default AuthService;