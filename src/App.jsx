import React from 'react';

import Routes from './routes/Routes.js';
import { DataProvider } from './core/DataContext/DataContext.js';
import { AuthContextProvider } from './Authorization/context/AuthContext.js';

export default function App() {
  return (
    <AuthContextProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthContextProvider>
  );
}
