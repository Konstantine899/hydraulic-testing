export function urlApi(filters) {
  const mainUrl = new URL(`http://metering.vts.vitebsk.energo.net/index.php`);

  mainUrl.search = '?r=hydraulic/default/json';

  // Связываю свои переменные с полями в БД
  mainUrl.searchParams.append('HydraulicSearch[name]', filters.nameOrg); // Наименование организации
  mainUrl.searchParams.append('HydraulicSearch[address]', filters.address); // append Вставляет элемент в конец mainUrl
  mainUrl.searchParams.append(
    'HydraulicSearch[requestPerson]',
    filters.applicant
  ); // Заявитель
  mainUrl.searchParams.append(
    'HydraulicSearch[makerPerson]',
    filters.implementer
  ); // Исполнитель

  return mainUrl;
}
