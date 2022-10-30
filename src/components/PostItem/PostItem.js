import React from "react";
import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={styles.post}>

            <div className='post__content'>
                <h3> {props.number}. {props.post.title}</h3>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className={styles.button}>
                <button onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default PostItem;
