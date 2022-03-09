import React from 'react';
import useCollapse from 'react-collapsed';
import { useState, useEffect } from "react";
import axios from "axios";
import photos from "./Photos.js";
import { useNavigate, useParams } from "react-router-dom";


function Collapsible(props) {
    const config = {
        duration: 200
    };

    const [albums, setAlbums] = useState([]);
    const navigate = useNavigate();
    const photos = (e, albumId) => {
        console.log(albumId)
        e.preventDefault();
        navigate(`/Photos/${albumId}`)
    }

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                const data = res.data.filter((item) => {
                    if(item.userId === props.userId){
                        return item;
                    }
                })
                console.log("albums",data);
                setAlbums(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (

        <div className="collapsible">
            <h3> User Albums</h3>
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Albums'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {albums.map((album, index) => (
                        <div className="name" key={index}>
                            <button className="btn" onClick={(e) => photos(e, album.id)}>{album.title}</button>
                            {/* {user.body} */}
                        </div>
                    )
                    )}

                </div>
                {/* <photos albumId={+albumId} /> */}

            </div>
        </div>
    );
}
function Albums(props) {
    return (
        <Collapsible userId={props.userId}/>
    );
}
export default Albums;