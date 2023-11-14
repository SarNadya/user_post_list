import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import AppRouter from '../AppRouter/AppRouter';
import { AuthContext } from '../../context';
import Layout from 'antd/es/layout/layout';
import Footer from '../../context/Footer/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Router>
        <Layout>
          <Header/>
          <Layout.Content className={styles.main}>
            <AppRouter/>
          </Layout.Content>
          <Footer/>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
