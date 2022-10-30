import React from "react";
import styles from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} className={styles.myInput} {...props}/>
        </div>
    );
});

export default MyInput;
