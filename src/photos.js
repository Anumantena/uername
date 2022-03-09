import React from 'react';
import useCollapse from 'react-collapsed';
import { useState, useEffect } from "react";
import axios from "axios";

function Collapsible() {
    const config = {
        duration: 200
    };


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log(res.data);
                setName(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [name, setName] = useState([]);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (

        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Posts'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {name.map((user, index) => (
                        <img src={user.url} key={index} alt="" />
                            )
                    )}

                        </div>
            </div>


            </div>
            );
}
            function Posts() {
    return (
            <Collapsible />
            );
}
            export default Posts;