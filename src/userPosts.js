import React from 'react';
import useCollapse from 'react-collapsed';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments.js";


function Collapsible(props) {
    const config = {
        duration: 200
    };

    const [posts, setPosts] = useState([]);
    const { userId } = useParams();


    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/`)
            .then((res) => {
                const data = res.data.filter((item) => {
                    if (item.userId === props.userId) {
                        return item;
                    }
            })
                console.log("posts", data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (

        <div className="collapsible">
            <h3> User Posts</h3>
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Posts'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div><input type="search"></input><button>Search</button></div>
                    
                    {posts.map((user, index) => (
                        <div className="name" key={index}>
                            {user.title}
                        </div> 
                    )
                    )}
                    <Comments userId={+userId}/>
                    <input type="text"></input><button>Post Comment</button>
                </div>
            </div>
           

        </div>
    );
}
function Posts(props) {
    return (
        <Collapsible userId={props.userId}/>
    );
}
export default Posts;



