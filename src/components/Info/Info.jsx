import React from 'react';
import styles from './Info.module.css';
import UIButton from '../UIButton/UIButton';

const Info = () => {
  return (
    <div className={styles.cover}>
      <h2 className={styles.subtitle}>
        Posted on <span style={{fontWeight: '900'}}>startup</span>
      </h2>
      <h1 className={styles.title}>
        Step-by-step guide to choosing great font pairs
      </h1>
      <p className={styles.author}>
        By <span style={{color: '#FFD050'}}>James West</span>  |  May 23, 2022 
      </p>
      <p className={styles.article}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <UIButton>Read More {'>'} </UIButton>
    </div>
  );
};

export default Info;