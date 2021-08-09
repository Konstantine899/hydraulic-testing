// import { HTTP_URL } from '../../constants/http/http.js';

export function url(sort) {
  const HTTP_URL = new URL(`http://metering.vts.vitebsk.energo.net/index.php`);
  HTTP_URL.search = '?r=hydraulic/default/json';

  // Связываю свои переменные с полями в БД
  HTTP_URL.searchParams.append('HydraulicSearch[name]', sort.nameOrg); // Наименование организации
  HTTP_URL.searchParams.append(
    'HydraulicSearch[address]',
    sort.objectHydraulicTest
  ); // append Вставляет элемент в конец mainUrl
  HTTP_URL.searchParams.append(
    'HydraulicSearch[requestPerson]',
    sort.applicant
  ); // Заявитель
  HTTP_URL.searchParams.append(
    'HydraulicSearch[makerPerson]',
    sort.implementer
  ); // Исполнитель

  return HTTP_URL;
}
