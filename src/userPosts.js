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
            .get("https://jsonplaceholder.typicode.com/posts")
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
        <h3> User Posts</h3>
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Posts'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {name.map((user, index) => (
                        <div className="name" key={index}>
                            {user.title}
                            {/* {user.body} */}
                            </div>
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