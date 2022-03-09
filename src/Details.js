import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Posts from "./userPosts";
import Albums from "./Albums.js";

function Details(props) {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    return (
        <Card>
            <h2>Details List</h2>
            <h3>User's Profile</h3>

            <Card.Header>Full Details</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text> 
                    Name : {props.name}
                    Email: {props.email}
                    Phone: {props.phone}
                    Website: {props.website}
                    Address: {props.address}
                </Card.Text>
                <Posts/>
                <Albums/>
                <Button className="btn btn-success" onClick={home}>Back to Home</Button>
            </Card.Body>
        </Card>

    );

    
};
export default Details;