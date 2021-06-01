import { dataConversion } from '../dataConversion';

import { urlApi } from '../../model/services/urlApi/urlApi.js';

export const loadingModels = async (filters) => {
  try {
    const response = await fetch(urlApi(filters));
    const resData = await response.json();
    return resData.map(dataConversion);
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
