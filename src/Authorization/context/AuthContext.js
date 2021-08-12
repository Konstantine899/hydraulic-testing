import React, { createContext, useState } from 'react';
import { AuthModel } from '../../models/AuthModel/AuthModel.js';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    ...AuthModel,
    isAuth: localStorage.getItem('LOGIN' && 'PASSWORD') !== null ? true : false,
  });
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // функция аутентификации пользователя
  const authenticateUser = () => {
    setAuth({ isAuth: true });
  };

  // Функция сохранения в локальное хранилище
  const saveToLocalStorage = (value) => {
    setLogin(JSON.stringify(localStorage.setItem('LOGIN', value.login))); // отправляю login
    setPassword(
      JSON.stringify(localStorage.setItem('PASSWORD', value.password))
    ); // отправляю password
  };

  // Функция удаления из локального хранилища
  const removeToLocalStorage = () => {
    localStorage.removeItem('LOGIN');
    localStorage.removeItem('PASSWORD');
    setAuth({ isAuth: false });
  };

  console.log(auth);

  const Authorization = (login, password) => {
    saveToLocalStorage(login, password);
    authenticateUser();
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        setLogin,
        password,
        setPassword,
        Authorization,
        removeToLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
