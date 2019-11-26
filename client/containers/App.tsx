import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { RootState } from "../reducers";
import {
  locationSelector,
  isLocationHomepageSelector
} from "../reducers/navigation";
import { setLocationActionCreator } from "../actions";
import { Link, OpenDropdown, MenuItem } from "../components";

//the Props has to have the shape of NavigationState type
interface AppProps {
  location: "homepage" | "aboutme";
  setLocation: (location: "homepage" | "aboutme") => Action;
}

//App is a react component and it must receive AppProps as a prop
class _App extends Component<AppProps> {
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
//App container should not know what our state looks like, which is why we imported locationSelector to handle it in a separate file - this is for organization reasons
export const App = connect(
  (state: RootState) => ({
    location: locationSelector(state),
    isLocationHomepage: isLocationHomepageSelector(state)
    //Alternative (but organizationally, worse) way to do it without selector functions
    // location: state.navigation.location,
    // isLocationHomepage: state.navigation.location === "homepage"
  }),
  { setLocation: setLocationActionCreator }
)(_App);
