import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./containers/App";
import { setLocationActionCreator } from "./actions";
// we are adding composeWithDevTools here to get easy access to the Redux dev tools
//creating store here

const store = createStore(reducers, composeWithDevTools());

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

//Understand redux flow:
//store holds state
//action creators create actions --> happens on an event
//actions are dispatched to reducers (meaning action creators are passed as props via containers to components so that component can call action creator)
//reducers "catch" or interpret actions and then update state

//this is how you dispatch actions to the store without using react
// setTimeout(() => {
//   store.dispatch(setLocationActionCreator("aboutme"));
// }, 3000);
