import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import useCollapse from 'react-collapsed';
import { useNavigate } from "react-router-dom";
import Posts from "./userPosts.js";
import { useParams } from "react-router-dom";


function Comments() {
        const config = {
            duration: 200
        };

    const [comments, setComments] = useState([]);
    const navigate = useNavigate();
    const Posts = (e, userId) => {
        console.log(userId)
        e.preventDefault();
        navigate(`/Details/${userId}`)
    }

    const { id } = useParams()


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                console.log(id, res.data);
                const data = res.data.filter((item) => {
                    if (item.userId === +id) {
                        return item;
                    }
                })
                console.log(res.data);
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
      return (
                    <div className="collapsible">
                        <h4> User comments</h4>
                        <div className="header" {...getToggleProps()}>
                            {isExpanded ? 'Collapse' : 'Comments'}
                        </div>
                        <div {...getCollapseProps()}>
                            <div className="content">

                                {comments.map((user, index) => (
                                    <div className="name" key={index}>
                                        {user.body}
                                    </div>
                                )
                                )}
                            </div>
                        </div>


                    </div>
                    );
}

export default Comments;
