import React, { createContext, useState } from 'react';
import { userData } from '../../Users/data/userData/userData.js';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(userData);
  const [user, setUser] = useState([]);
  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
