import React, { useContext } from 'react';
import MyInput from '../components/MyInput/MyInput';
import MyButton from '../components/MyButton/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1>Вход</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
        <MyButton onClick={login}>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;