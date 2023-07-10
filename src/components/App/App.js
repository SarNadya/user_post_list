import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import AppRouter from '../AppRouter/AppRouter';

function App() {

  return (
    <Router>
      <Header/>
      <AppRouter/>
    </Router>
  );
}

export default App;
