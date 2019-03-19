import React from "react";
import { Link } from 'react-router-dom'

const Cards = (props) => {
    return (
        < div >
            <div className="card">
                <img className="card-img-top" src={props.image} alt="manufacturer" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-body">
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div >
    )
}
export default Cards