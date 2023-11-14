import React from 'react';
import styles from './UIButton.module.css';
import { Button } from 'antd';

const UIButton = ({children}) => {
  return (
    <Button className={styles.button}>
      {children}
    </Button>
  );
};

export default UIButton;