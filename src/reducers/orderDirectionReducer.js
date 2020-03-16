const orderDirectionReducer = (state = {}, action) => {
    switch (action.type) {
      case "SET_ORDER_DIRECTION":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default orderDirectionReducer;