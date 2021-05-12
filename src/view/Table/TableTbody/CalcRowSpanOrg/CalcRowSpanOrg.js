import React from 'react';

export function CalcRowSpanOrg(props) {
  console.log(props);

  let sumPipelines = 0;
  props.CalcDataPipelinesOrg.objects.map(function (calculatePipelines, index) {
    sumPipelines += calculatePipelines.pipelines.length;
  });

  return sumPipelines;
}
