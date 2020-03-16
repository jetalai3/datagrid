const selectionReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_ROWS":
      return (state.selected = action.payload);
    case "DELETE_ITEMS":
      return state.selected = [];
    default:
      return state;
  }
};
export default selectionReducer;
