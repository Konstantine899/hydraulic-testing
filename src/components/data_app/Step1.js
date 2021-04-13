import React from 'react';

import { data } from '../../../Temp/123.js';

import { Org } from './Org';
import { Address } from './Address';
import { Pipelines } from './Pipelines.js';

export const Step1 = () => {
  return (
    <>
      <h1>Вывод данных</h1>
      <Org data={data} />
      <Address data={data} />
      <Pipelines data={data} />
    </>
  );
};
