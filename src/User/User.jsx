import React from 'react';
import { AuthLogout } from '../Authorization/components/Buttons/AuthLogout/AuthLogout.jsx';
import avatar from './img/001.jpg';
import './User.scss';

export const User = () => {
  return (
    <>
      <div className="avatar">{/* <img src={avatar} alt="" /> */}</div>
      <AuthLogout />
    </>
  );
};
