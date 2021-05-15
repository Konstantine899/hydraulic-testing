export default function Address(name, pipelines) {
  return {
    name: name,
    pipelines: pipelines,
    isValid: true,
    countPipelines: function () {
      return pipelines.length;
    },
  };
}
