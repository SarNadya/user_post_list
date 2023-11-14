import { Layout } from 'antd';
import React from 'react';
import styles from './Footer.module.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../components/Header/img/Logo.png';

const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        justify='end'
        style={{
          display: 'flex',
          alignItems: 'center',
          // height: '100%'
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
          <Link to='/#'>About us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/#'>Contact us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/#'>Privacy Policy</Link>
        </Menu.Item>
      </Menu>
    </Layout.Footer>
  );
};

export default Footer;