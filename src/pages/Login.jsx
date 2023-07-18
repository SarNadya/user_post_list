import React from 'react';
import MyInput from '../components/MyInput/MyInput';
import MyButton from '../components/MyButton/MyButton';

const Login = () => {
  return (
    <div>
      <h1>Вход</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;