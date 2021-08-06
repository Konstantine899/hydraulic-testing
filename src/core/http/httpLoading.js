import { httpData } from './httpData.js';

import { url } from './url.js';

export const httpLoading = async (sort) => {
  try {
    const Url = await fetch(url(sort));
    const response = await Url.json();
    return response.map(httpData);
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
