import React from 'react';

export const RowTestView = (props) => {
  let orgsPipelinesList = 0;
  return props.rowTestData.objects.map(function (object, index) {
    orgsPipelinesList += object.pipelines.length;

    return console.log(index, 'Количество труб:', orgsPipelinesList);
  });
};
