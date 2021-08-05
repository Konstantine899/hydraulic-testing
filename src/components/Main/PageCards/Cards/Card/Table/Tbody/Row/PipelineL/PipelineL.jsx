import React, { useContext } from 'react';
import { pipelineContext } from '../Row.jsx';

export function PipelineL() {
  const { pipeline } = useContext(pipelineContext);
  return <td>{pipeline.l}</td>;
}
