import React, { useContext } from 'react';
import { pipelineContext } from '../Row.js';

export function PipelineD() {
  const { pipeline } = useContext(pipelineContext);
  return <td>{pipeline.d}</td>;
}
