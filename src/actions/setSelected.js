const selection = rows => {
    return {
      type: "SELECT_ROWS",
      payload: rows
    };
  };
  
  export default selection;
  