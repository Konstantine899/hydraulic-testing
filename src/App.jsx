import React from 'react';

import Routes from './routes/Routes.js';
import { DataProvider } from './core/DataContext/DataContext.js';

export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
