//преобразовываю данные с сервера в нужный мне вид
export function httpData(data) {
  return {
    id: data.id,
    name: data.org, // имя организации
    objectHydraulicTest: data.objects, // объекты objects
    makers_appointment: data.makers_appointment, // Должности исполнителя
    makers_name: data.makers_name, // Исполнитель
    makers_phone: data.makers_phone, // телефон исполнителя
    request_person_appointment: data.request_person_appointment, // должности заявителя
    request_person_name: data.request_person_name, // ФИО заявителя
    year: data.year, // год заявки
    isWarning: data.isWarning, // предупреждение
  };
}
