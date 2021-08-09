import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Login } from '../components/Login/Login.jsx';
import { Password } from '../components/Password/Password.jsx';
import './Authorization.scss';

export function Authorization() {
  const [data, setValues] = useState({ name: '', password: '' });

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { name: data.name, password: data.password },
    mode: 'onBlur',
  });

  let history = useHistory();

  const onSubmit = (data) => {
    setValues(data); // сначало обязательно сохраняю данные. Если поменять местами будет утечка памяти.
    history.push('/search');
  };

  console.log('NAME', data.name);
  console.log('PASSWORD', data.password);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Login ref={register} id="name" type="text" name="name" />
      <Password ref={register} id="password" type="password" name="password" />
      <button>Войти</button>
    </form>
  );
}
