const filterAction = (filterObject, array) => {
  return {
    type: "FILTER",
    payload: { filterObject, array }
  };
};

export default filterAction;
