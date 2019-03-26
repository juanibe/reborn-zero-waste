import axios from 'axios';

class ProfileService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3001/api',
            withCredentials: true
        });
        this.service = service;
    }

    manufacturerInformation = () => {
        return this.service.get('/profile')
            .then(response => response.data)
    }
}
export default ProfileService;