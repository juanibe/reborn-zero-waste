import React, { Component } from 'react';

class ManufacturerDetails extends Component {
    state= {
            name:"Arun Rao",
            email:"arunrao@gmail.com",
            businessname: "AR Enterprises",
            businesslogo:"",
			address: "123 AR Default",
			city: "Berlin",
			state: "Berlin",
			country: "Germany",
			zipcode: "10553",
            about: "I like stripes",
            fabricsavailable:[
                {
                type:"Cotton",
                amount:"500 meters",
                available_from:"",
                available_till:"24/05/2019",//Optional field
                aboutFabric:"This is the fabric from processing scrap clothes"//Optional field
            }
        ]
    };

    render() {
        return (
            <div>What</div>
        )
    }
}

export default ManufacturerDetails;