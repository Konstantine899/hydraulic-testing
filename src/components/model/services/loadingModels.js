import { OrganizationBuilder } from '../Organization';

const urlApi = `http://metering.vts.vitebsk.energo.net/index.php?r=hydraulic/default/json&HydraulicSearch[address]=чкал`;

export const loadingModels = async () => {
  try {
    const response = await fetch(urlApi);
    const resData = await response.json();
    const resultData = resData.map((org) =>
      OrganizationBuilder(org.org, org.objects)
    );
    return resultData;
  } catch (e) {
    return Promise.reject(new Error('Отловленная ошибка' + e.message));
  }
};
