import React from "react";
import styles from './PostItem.module.css';
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
const navigate = useNavigate();

    function handleClick() {
        navigate(`/posts/${props.post.id}`)
    }

    return (
        <div className={styles.post}>

            <div className='post__content'>
                <h3> {props.post.id}. {props.post.title}</h3>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className={styles.button}>
                <MyButton onClick={handleClick}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
