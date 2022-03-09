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
            .get("https://jsonplaceholder.typicode.com/albums")
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
            <h3> User Albums</h3>
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Albums'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {name.map((user, index) => (
                        <div className="name" key={index}>
                            <button className="btn">{user.title}</button>
                            {/* {user.body} */}
                        </div>
                    )
                    )}



                </div>
            </div>
        </div>
    );
}
function Albums() {
    return (
        <Collapsible />
    );
}
export default Albums;