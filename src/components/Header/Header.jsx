import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import MyButton from "../MyButton/MyButton";
import { AuthContext } from '../../context';
import logo from './img/Logo.png';
import { Layout, Menu } from 'antd';

const Header = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <Layout.Header style={{height: '80px'}}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        justify='end'
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <img src={logo} alt="logo" style={{marginRight: 'auto'}} />
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/posts'>Posts</Link>
        </Menu.Item>
        <Menu.Item>
          <MyButton onClick={logout}>Logout</MyButton>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;