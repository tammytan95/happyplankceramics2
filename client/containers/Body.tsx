import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { Gallery } from "../components";

interface BodyProps {
  frontPgImageRows?: any;
}

//1 - We want to pass props from state (initial state is in the reducer) to this body component.
class _Body extends Component<BodyProps> {
  render() {
    return <Gallery imageRows={this.props.frontPgImageRows}></Gallery>;
  }
}

export const Body = connect(
  (state: RootState) => ({
    //2 - map state to props - basically we need to create variable that is the value of the prop we want
    //in images reducer, frontPgImageRows' initial state is an array of img objects
    frontPgImageRows: state.images.frontPgImages
  }),
  {
    //map dispatch to props
  }
)(_Body);
