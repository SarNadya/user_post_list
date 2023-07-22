import React from "react";
import styles from './MyInput.module.css';
import { Input } from 'antd';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <Input ref={ref} className={styles.myInput} {...props}/>
        </div>
    );
});

export default MyInput;
