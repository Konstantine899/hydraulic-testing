export function RowSpanOrg(props) {
  let sumPipelines = 0;

  props.CalcPipelines.buildings.map(function (RowSpanPipeline) {
    sumPipelines += RowSpanPipeline.pipelines.length;
  });

  return sumPipelines;
}
