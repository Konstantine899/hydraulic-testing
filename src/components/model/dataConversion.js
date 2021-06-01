//преобразовываю данные с сервера в нужный мне вид
export function dataConversion(dataServer) {
  return {
    id: dataServer.id,
    name: dataServer.org, // имя организации
    buildings: dataServer.objects, // объекты objects
    makers_appointment: dataServer.makers_appointment, // Должности исполнителя
    makers_name: dataServer.makers_name, // Исполнитель
    makers_phone: dataServer.makers_phone, // телефон исполнителя
    request_person_appointment: dataServer.request_person_appointment, // должности заявителя
    request_person_name: dataServer.request_person_name, // ФИО заявителя
    year: dataServer.year, // год заявки
    isWarning: dataServer.isWarning, // предупреждение
  };
}
