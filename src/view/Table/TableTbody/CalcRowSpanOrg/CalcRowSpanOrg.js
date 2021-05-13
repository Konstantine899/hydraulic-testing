export function CalcPipelines(props) {
  console.log('Данные', props.CalcDataPipelinesOrg);

  let sumPipelines = 0;
  props.CalcDataPipelinesOrg.objects.map(function (calculatePipelines, index) {
    sumPipelines += calculatePipelines.pipelines.length;
  });

  return sumPipelines;
}
