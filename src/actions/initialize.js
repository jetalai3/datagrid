const initialize = quantity => {
  return {
    type: "INITIALIZE",
    payload: quantity
  };
};

export default initialize;
