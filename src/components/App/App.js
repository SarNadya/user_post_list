import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import AppRouter from '../AppRouter/AppRouter';
import { AuthContext } from '../../context';

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
        <Header/>
        <AppRouter/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
