import React from 'react'
import { useNavigate } from "react-router-dom";

function Details(props) {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    return (
        <div>
        <div>My name is : {props.name}</div>
        <div>
        <button className="btn btn-success" onClick={home}>Back to Home </button>
        </div>
        </div>
    );

    
};
export default Details;