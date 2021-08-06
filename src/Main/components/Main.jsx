import React from 'react';

import { Form } from '../../Search/components/Form.jsx';
import { PageCards } from '../../Cards/components/PageCards.jsx';

import './Main.scss';

export function Main() {
  return (
    <div className="main">
      <Form />
      <PageCards />
    </div>
  );
}
