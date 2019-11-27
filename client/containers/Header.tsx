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
interface HeaderProps {
  location?: any;
  setLocation: typeof setLocationActionCreator;
}

//App is a react component and it must receive AppProps as a prop
class _Header extends Component<HeaderProps> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // border: "1px solid purple",
          justifyContent: "space-between",
          fontSize: "15px",
          fontFamily: "Heebo, sans-serif",
          fontWeight: "bolder"
        }}
      >
        {this.props.location}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // border: "1px solid red",
            justifyContent: "space-between"
          }}
        >
          <MenuItem
            displayName="   SHOP   "
            links={[
              {
                target: "All Page",
                displayName: "ALL",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              },
              {
                target: "Bowls Page",
                displayName: "BOWLS",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              }
            ]}
          ></MenuItem>
          <MenuItem
            displayName="   ZINE   "
            links={[
              {
                target: "Issue1 Page",
                displayName: "ISSUE1",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              },
              {
                target: "Issue2 Page",
                displayName: "ISSUE2",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              }
            ]}
          ></MenuItem>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
            // border: "1px solid grey"
          }}
        >
          <MenuItem
            displayName="HAPPY PLANK CERAMICS"
            links={[
              {
                target: "HomePage",
                displayName: "",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              }
            ]}
          ></MenuItem>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
            // border: "1px solid purple"
          }}
        >
          <MenuItem
            displayName="   ABOUT   "
            links={[
              {
                target: "About Page",
                displayName: "",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              }
            ]}
          ></MenuItem>
          <MenuItem
            displayName="   CART   "
            links={[
              {
                target: "Cart Page",
                displayName: "",
                handleOnClick: target => {
                  console.log("from Header", target);
                }
              }
            ]}
          ></MenuItem>
        </div>
      </div>
    );
  }
}

//connect(mapStateToProps, mapDispatchToProps)
//connects takes the store and makes it available to the container as a prop
//App container should not know what our state looks like, which is why we imported locationSelector to handle it in a separate file - this is for organization reasons
export const Header = connect(
  (state: RootState) => ({
    location: locationSelector(state),
    isLocationHomepage: isLocationHomepageSelector(state)
    //Alternative (but organizationally, worse) way to do it without selector functions
    // location: state.navigation.location,
    // isLocationHomepage: state.navigation.location === "homepage"
  }),
  { setLocation: setLocationActionCreator }
)(_Header);
