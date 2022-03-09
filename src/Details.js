import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Details(props) {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>    </Card.Title>
                <Card.Text> 
                    Name : {props.name}
                    Email: {props.email}
                    Phone: {props.phone}
                    Website: {props.website}
                    Address: {props.address}
                </Card.Text>
                <Button className="btn btn-success" onClick={home}>Back to Home</Button>
            </Card.Body>
        </Card>
    );

    
};
export default Details;