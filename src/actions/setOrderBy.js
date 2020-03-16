const orderBy = orderColumn => {
  return {
    type: "SET_ORDER",
    payload: orderColumn
  };
};

export default orderBy;
