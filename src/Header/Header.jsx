import React from 'react';
import { Authorization } from '../Authorization/components/Authorization.jsx';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <Authorization />
    </div>
  );
};
