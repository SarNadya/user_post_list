import React from "react";
import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

const PostList = ({posts, title}) => {
    return (
        <div className={styles.postlist}>

            <h1> {title} </h1>
            {posts.map((post, index) => 
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;