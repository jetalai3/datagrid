const booleanFiltering = (booleanValue, array) => {
  return {
    type: "BOOLEAN_FILTERING",
    payload: {booleanValue, array}
  };
};

export default booleanFiltering;
