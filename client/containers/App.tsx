import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { RootState } from "../reducers";
import { locationSelector } from "../reducers/navigation";
import { setLocationActionCreator } from "../actions";

//the Props has to have the shape of NavigationState type
interface AppProps {
  location: "homepage" | "aboutme";
  setLocation: (location: "homepage" | "aboutme") => Action;
}

//App is a react component and it must receive AppProps as a prop
class _App extends Component<AppProps> {
  componentDidMount() {
    setTimeout(() => this.props.setLocation("aboutme"), 1500);
  }

  render() {
    return <div>{this.props.location}</div>;
  }
}

//connect(mapStateToProps, mapDispatchToProps)
//connects takes the store and makes it available to the container as a prop
export const App = connect(
  (state: RootState) => ({
    location: locationSelector(state)
  }),
  { setLocation: setLocationActionCreator }
)(_App);
