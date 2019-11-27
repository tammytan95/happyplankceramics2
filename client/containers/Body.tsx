import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { Gallery } from "../components";
import {
  setLocationActionCreator,
  updateCurrentProductActionCreator
} from "../actions";

interface BodyProps {
  frontPgImageRows?: any;
  location?: any;
  setLocation: typeof setLocationActionCreator;
  updateCurrentProduct: typeof updateCurrentProductActionCreator;
  currentProduct: string;
}

//1 - We want to pass props from state (initial state is in the reducer) to this body component.
class _Body extends Component<BodyProps> {
  render() {
    return (
      <div>
        {this.props.location === "homepage" ? (
          <Gallery
            imageRows={this.props.frontPgImageRows}
            setLocation={this.props.setLocation}
            updateCurrentProduct={this.props.updateCurrentProduct}
          ></Gallery>
        ) : null}
        {this.props.location === "productpage" ? (
          <div>
            Product Page
            <div>
              {this.props.currentProduct}

              <img
                src={`https://images.dog.ceo${this.props.currentProduct}`}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export const Body = connect(
  (state: RootState) => ({
    //2 - map state to props - basically we need to create variable that is the value of the prop we want
    //in images reducer, frontPgImageRows' initial state is an array of img objects
    frontPgImageRows: state.images.frontPgImages,
    location: state.navigation.location,
    currentProduct: state.navigation.currentProduct
  }),
  {
    setLocation: setLocationActionCreator,
    updateCurrentProduct: updateCurrentProductActionCreator
  }
)(_Body);
