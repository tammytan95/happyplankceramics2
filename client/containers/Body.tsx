import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { RootState } from "../reducers";
import {
  locationSelector,
  isLocationHomepageSelector
} from "../reducers/navigation";
import { setLocationActionCreator } from "../actions";
import { SingleImgRow } from "../components";

interface BodyProps {
  location: "homepage" | "aboutme";
  setLocation: (location: "homepage" | "aboutme") => Action;
}

//onclick of singleImg, we want to update location on App
class _Body extends Component<BodyProps> {
  render() {
    return (
      <div>
        <SingleImgRow
          displayName="Img1"
          imgTarget="Product Page/Img 1"
          img="Img1.jpg"
          handleOnClick={imgTarget => {
            console.log("from Body", imgTarget);
          }}
        />
      </div>
    );
  }
}

export const Body = connect(
  (state: RootState) => ({
    location: locationSelector(state),
    isLocationHomepage: isLocationHomepageSelector(state)
  }),
  { setLocation: setLocationActionCreator }
)(_Body);
