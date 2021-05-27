import { OrganizationBuilder } from '../Organization';

import { urlApi } from '../../model/services/urlApi/urlApi.js';

export const loadingModels = async (address) => {
  try {
    const response = await fetch(urlApi(address));
    const resData = await response.json();
    const resultData = resData.map((org) =>
      OrganizationBuilder(
        org.org,
        org.objects,
        org.id,
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
