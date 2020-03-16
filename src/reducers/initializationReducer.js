import createUsers from "../util/createUsers";

const initializationReducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return (state.initialData = createUsers(action.payload));
    case "DELETE_ITEMS":
      return state.filter(
        item => !action.payload.includes(item.name)
      );
    default:
      return state;
  }
};

export default initializationReducer;
