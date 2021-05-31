import { OrganizationBuilder } from '../Organization';

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
      urlApi(
        filters.nameOrg,
        filters.address,
        filters.applicant,
        filters.implementer
      )
    );
    const resData = await response.json();
    const resultData = resData.map((org) =>
      OrganizationBuilder(
        // Передаю данные с сервера для преобразования
        org.id,
        org.org,
        org.objects,
        org.makers_appointment,
        org.makers_name,
        org.makers_phone,
        org.request_person_appointment,
        org.request_person_name,
        org.year,
        org.isWarning
      )
    );

    return resultData;
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
