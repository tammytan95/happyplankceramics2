import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { RootState } from "../reducers";
import { locationSelector } from "../reducers/navigation";
import { setLocationActionCreator } from "../actions";
import { Link, OpenDropdown, MenuItem } from "../components";

//the Props has to have the shape of NavigationState type
interface AppProps {
  location: "homepage" | "aboutme";
  setLocation: (location: "homepage" | "aboutme") => Action;
}

//App is a react component and it must receive AppProps as a prop
class _App extends Component<AppProps> {
  //   componentDidMount() {
  //     setTimeout(() => this.props.setLocation("aboutme"), 1500);
  //   }

  render() {
    return (
      <div>
        {this.props.location}
        <MenuItem
          displayName="Shop"
          links={[
            {
              target: "sampleUrl1.jpg",
              displayName: "sampleUrlName1",
              handleOnClick: target => {
                console.log("from App", target);
              }
            },
            {
              target: "sampleUrl2.jpg",
              displayName: "sampleUrlName2",
              handleOnClick: target => {
                console.log("from App", target);
              }
            }
          ]}
        ></MenuItem>
        <MenuItem
          displayName="Shop"
          links={[
            {
              target: "sampleUrl1.jpg",
              displayName: "sampleUrlName1",
              handleOnClick: target => {
                console.log("from App", target);
              }
            },
            {
              target: "sampleUrl2.jpg",
              displayName: "sampleUrlName2",
              handleOnClick: target => {
                console.log("from App", target);
              }
            }
          ]}
        ></MenuItem>
      </div>
    );
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
