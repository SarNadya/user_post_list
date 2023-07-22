import React from "react";
import styles from './MyButton.module.css';
import { Button } from 'antd';

const MyButton = ({children, ...props}) => {
    return (
        <Button {...props} className={styles.myBtn}>
            {children}
        </Button>
    );
};

export default MyButton;
