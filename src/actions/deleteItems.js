const deleteItems = selected => {
    return {
      type: "DELETE_ITEMS",
      payload: selected
    };
  };
  
  export default deleteItems;
  