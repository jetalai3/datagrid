import initializationReducer from "./initializationReducer";
import filterReducer from "./filterReducer";

import { combineReducers } from "redux";
import selectionReducer from "./selectionReducer";
import orderReducer from "./orderReducer";
import orderDirectionReducer from "./orderDirectionReducer";
import filterParamsReducer from "./filterParamsReducer";

const combinedReducer = combineReducers({
  initialData: initializationReducer,
  filteredData: filterReducer,
  selected: selectionReducer,
  orderBy: orderReducer,
  orderDirection: orderDirectionReducer,
  filterObject: filterParamsReducer
});

export default combinedReducer;
