import React from 'react';

import Routes from './components/routes/Routes.js';
import { DataProvider } from './components/services/context/DataContext/DataContext.js';

export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
