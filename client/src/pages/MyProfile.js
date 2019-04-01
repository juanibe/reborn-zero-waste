// Register as a manufacturer

// auth/Signup.js

import React, { Component } from 'react';
import '../App.css';
import ProfileService from "../components/profile-service";


//import AuthService from './auth-service';

// const MyProfile = () => {
//     const service = new ProfileService()
//     service.manufacturerInformation().then(user => console.log("USER", user))
//     return (
//         <div>
//             {}
//         </div>
//     )

// }

// export default MyProfile;  


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.service = new ProfileService();
        this.state = { name: '' }
    }

    componentDidMount = () => {

        this.service.manufacturerInformation().then(res => {
            console.log('res', res)
            // this.setState({ name: res.username })
        })
    }

    render() {
        return (
            <span>
                <h1>
                    {this.state.name}
                </h1>
            </span>
        )
    }
}

export default MyProfile;