import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import Posts from "./userPosts";
import Albums from "./Albums.js";

function Details(props) {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    const {userID} =useParams();

    const[userDetails, setuserDetails] = useState({});

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then((res) => {
                console.log(res.data);
                setuserDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <Card style={{ width: '20rem' }}>
            <h2>Details List</h2>
            <h3>User's Profile</h3>

            <Card.Header>Full Details</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text> 
                    Name : {userDetails.name} 
                    Email: {userDetails.email} 
                    Phone: {userDetails.phone}
                    Website: {userDetails.website}
                    {/* Address: {userDetails.address.street+" "+userDetails.address.suite+" "+userDetails.address.city+" "+userDetails.address.zipcode} */}
                </Card.Text>
                <Posts userId={+userID}/>
                <Albums userId={+userID}/>
                <Button className="btn btn-success" onClick={home}>Back to Home</Button>
            </Card.Body>
        </Card>

    );

    
};
export default Details;