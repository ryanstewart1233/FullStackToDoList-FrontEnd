import React from "react";
import ReactDOM from "react-dom";

//redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

//my imports
import "./index.scss";
import App from "./App";

import reducers from "./reducers";

//these two lines enables redux dev tools to be used with chrome. very handy
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  //the provider is what passes info into the App and re-renders the app when any changes to state are made
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
