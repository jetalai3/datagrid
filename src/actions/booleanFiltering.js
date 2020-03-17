const booleanFiltering = booleanValue => {
  return {
    type: "BOOLEAN_FILTERING",
    payload: booleanValue
  };
};

export default booleanFiltering;
