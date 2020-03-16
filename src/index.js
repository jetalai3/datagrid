import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./reducers";
import createUsers from "./util/createUsers";

const initialArray = createUsers(25);
const store = createStore(
  combinedReducer,
  {
    initialData: initialArray,
    filteredData: initialArray,
    selected: [],
    orderBy: "name",
    orderDirection: "asc"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
