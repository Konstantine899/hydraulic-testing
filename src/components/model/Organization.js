export function OrganizationBuilder(
  name,
  buildings,
  id,
  makers_appointment,
  makers_name,
  makers_phone,
  request_person_appointment,
  request_person_name,
  year,
  isWarning
) {
  return {
    id: id,
    name: name, // имя организации
    buildings: buildings, // объекты objects
    makers_appointment: makers_appointment, // Должности исполнителя
    makers_name: makers_name, // Исполнитель
    makers_phone: makers_phone, // телефон исполнителя
    request_person_appointment: request_person_appointment, // должности заявителя
    request_person_name: request_person_name, // ФИО заявителя
    year: year, // год заявки
    isWarning: isWarning, // предупреждение
  };
}
