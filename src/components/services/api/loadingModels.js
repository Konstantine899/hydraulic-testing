import { dataConversion } from './dataConversion.js';

import { urlApi } from '../api/urlApi/urlApi.js';

export const loadingModels = async (filters) => {
  try {
    const response = await fetch(urlApi(filters));
    const resData = await response.json();
    return resData.map(dataConversion);
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
