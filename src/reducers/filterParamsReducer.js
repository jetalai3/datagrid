const filterParamsReducer = (state = {}, action) => {
  switch (action.type) {
    case "BOOLEAN_FILTERING":
      return {
        ...state,
        boolean: action.payload
      };
    case "STRING_FILTERING":
      return {
        ...state,
        string: action.payload
      };
    case "ENUM_FILTERING":
      let enumeration = [];
      // eslint-disable-next-line no-unused-expressions
      if (action.payload !== null) {
        action.payload.forEach(element => {
          enumeration.push(element.value);
        });
      } else {
        enumeration = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ];
      }
      return {
        ...state,
        weekday: enumeration
      };
    default:
      return state;
  }
};
export default filterParamsReducer;
