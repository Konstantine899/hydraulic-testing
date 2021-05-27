let url = `http://metering.vts.vitebsk.energo.net/index.php?r=hydraulic/default/json&HydraulicSearch[address]=чка`;

export function urlApi(address) {
  const mainUrl = new URL(`http://metering.vts.vitebsk.energo.net/index.php`);

  mainUrl.search = '?r=hydraulic/default/json';

  mainUrl.searchParams.append('HydraulicSearch[address]', address); // append Вставляет элемент в конец массива

  return mainUrl;
}

// export let urlApiBuilder = function (input1, input2, input3, input4) {
//   let url =
//     'http://metering.vts.vitebsk.energo.net/index.php?r=hydraulic/default/json&';

//   if (input1 != null) {
//     url += 'HydraulicSearch[address]=' + input1;
//   }

//   if (input2 != null) {
//     url += 'HydraulicSearch[name]=' + input2;
//   }

//   if (input3 != null) {
//     url += 'HydraulicSearch[maker]=' + input3;
//   }

//   if (input4 != null) {
//     url += 'HydraulicSearch[request_person]=' + input4;
//   }

//   return url;
// };
