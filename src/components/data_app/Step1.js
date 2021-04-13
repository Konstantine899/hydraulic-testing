import React from 'react';
import { Step1Data } from '../data_app/Step1Data.js';
import { data } from '../../../Temp/123.js';

// const data = {
//   test: ' проверка передачи значения',
// };

export const Step1 = () => {
  return (
    <>
      <h1>Вывод данных</h1>
      <Step1Data data={data} />
    </>
  );
};
