import React from 'react';
import useCollapse from 'react-collapsed';
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";


function Collapsible(props) {
    const config = {
        duration: 200
    };
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
                console.log(id, res.data);
                const data = res.data.filter((item) => {
                    if (item.albumId === +id) {
                        return item;
                    }
                })
                console.log(data);
                setPhotos(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [photos, setPhotos] = useState([]);
    return (

                <div className="content">
                    {photos.map((user, index) => (
                        <img src={user.url} key={index} alt="" />
                            )
                    )}

                        </div>
            // </div>


            // </div>
            );
}
function photos(props) {
                return (
                    <Collapsible albumId={props.id}/>
            );
}
export default photos;