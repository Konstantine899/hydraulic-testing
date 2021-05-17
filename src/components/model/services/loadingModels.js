import { OrganizationBuilder } from '../Organization';

export function loadingModels() {
  const urlApi =
    'http://metering.vts.vitebsk.energo.net/index.php?r=hydraulic/default/json';

  const loadingData = async () => {
    try {
      const res = await fetch(urlApi);
      const rawData = await res.json();

      console.log(rawData);

      const result = rawData.map(function (org) {
        return OrganizationBuilder(org.org, org.objects);
      });
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    loadingData,
  };
}
