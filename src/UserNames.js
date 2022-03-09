import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Details from "./Details.js";

function UserNames() {

    const [name, setName] = useState([]);
    const navigate = useNavigate();
    const Details = (e,userID) => {
        console.log(userID)
        e.preventDefault();
        navigate(`/Details/${userID}`)
    }

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
                setName(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2> User's List</h2>
            {name.map((user, index) => (
                <div className="name" key={index}>
                    <span className="hovertext" data-hover={"UserName:"+ user.username+" " +" "+ "," +" " +"Email:" +  user.email}>
                        {/* {<Details  name = {user.name}
                    email= {user.email}
                    phone = {user.phone}
                    website= {user.website}
                    address= {user.address}
                    />} */}
                        <button className="btn" onClick={(e) => Details(e,user.id)} >{user.name} </button>
                    </span>
                   

                </div>
              
            ))}
        </div> 
    );
}

export default UserNames;
