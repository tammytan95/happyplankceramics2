import React, { Component } from "react";

import { SingleImgRow, DoubleImgRow } from "../components";
import {
  setLocationActionCreator,
  updateCurrentProductActionCreator
} from "../actions";

interface GalleryProps {
  //this is an array of any interface type
  imageRows: Array<any>;
  setLocation: typeof setLocationActionCreator;
  updateCurrentProduct: typeof updateCurrentProductActionCreator;
}

//for SingleImgRow, there is only 1 image in imgRow vs 2 images in DoubleImgRow
const isSingleImgRow = imgRow => imgRow.image !== undefined;

export class Gallery extends Component<GalleryProps> {
  render() {
    const handleOnClick = target => {
      this.props.setLocation("productpage");
      this.props.updateCurrentProduct(target);
    };
    return (
      <>
        {this.props.imageRows.map((imageRow, i) => {
          if (isSingleImgRow(imageRow)) {
            return (
              <SingleImgRow
                key={i}
                image={{
                  ...imageRow.image,
                  handleOnClick
                }}
              />
            );
          } else {
            return (
              <DoubleImgRow
                key={i}
                image1={{
                  ...imageRow.image1,
                  handleOnClick
                }}
                image2={{
                  ...imageRow.image2,
                  handleOnClick
                }}
              />
            );
          }
        })}
      </>
    );
  }
}
