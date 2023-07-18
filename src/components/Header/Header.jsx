import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import MyButton from "../MyButton/MyButton";
import { AuthContext } from '../../context';

const Header = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to='/'>О нас</Link>
        <Link to='/posts'>Посты</Link>
      </div>
      <MyButton onClick={logout}>Выйти</MyButton>
    </div>
  );
};

export default Header;