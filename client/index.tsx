import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./containers/App";
import { setLocationActionCreator } from "./actions";
// we are adding composeWithDevTools here to get easy access to the Redux dev tools

const store = createStore(reducers, composeWithDevTools());

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

// setTimeout(() => {
//   store.dispatch(setLocationActionCreator("aboutme"));
// }, 3000);
