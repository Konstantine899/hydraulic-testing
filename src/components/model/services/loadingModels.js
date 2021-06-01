import { dataConversion } from '../dataConversion';

import { urlApi } from '../../model/services/urlApi/urlApi.js';

export const loadingModels = async (
  // loadingModels функция которая получает данные с сервера

  // атрибуты которые являются фильтрами позволяющие получать отфильтрованные данные с сервера
  filters
) => {
  try {
    // Получаю данные с сервера
    const response = await fetch(
      // получаю отфильтрованный данные с сервера
      urlApi(filters)
    );
    const resData = await response.json(); // Получаю данные с сервера
    const resultData = resData.map(dataConversion); // Передаю ответ то сервера в dataConversion и итерирую преобразованные данные

    return resultData;
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
