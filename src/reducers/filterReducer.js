import applyFilters from '../util/applyFilters';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case "FILTER":                                     
      return (state = applyFilters(action.payload.array, action.payload.filterObject));
    case "DELETE_ITEMS":
      return state = state.filter(
        item => !action.payload.includes(item.name)
      );
    default:
      return state;
  }
};
export default filterReducer;
