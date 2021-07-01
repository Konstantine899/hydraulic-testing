import React from 'react';

import Routes from './components/controller/routes/Routes.js';

import { DataProvider } from './components/model/services/DataContext/DataContext.js';

// Удалил не нужные ветки

export default function app() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
