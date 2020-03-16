const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case "BOOLEAN_FILTERING":
      return (state = action.payload.array.filter(
        row => row.active === action.payload.booleanValue
      ));
    case "DELETE_ITEMS":
      return state = state.filter(
        item => !action.payload.includes(item.name)
      );
    default:
      return state;
  }
};
export default filterReducer;
