import React from "react";
import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <div className={styles.postlist}>
            <h1 className={styles.title}> {title} </h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
