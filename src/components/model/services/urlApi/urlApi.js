export function urlApi(nameOrg, address, applicant, implementer) {
  const mainUrl = new URL(`http://metering.vts.vitebsk.energo.net/index.php`);

  mainUrl.search = '?r=hydraulic/default/json';

  // Связываю свои переменные с полями в БД
  mainUrl.searchParams.append('HydraulicSearch[name]', nameOrg); // Наименование организации
  mainUrl.searchParams.append('HydraulicSearch[address]', address); // append Вставляет элемент в конец mainUrl
  mainUrl.searchParams.append('HydraulicSearch[requestPerson]', applicant); // Заявитель
  mainUrl.searchParams.append('HydraulicSearch[makerPerson]', implementer); // Исполнитель

  return mainUrl;
}
