import React, { Component } from "react";

import { SingleImgRow, DoubleImgRow } from "../components";

interface GalleryProps {
  //this is an array of any interface type
  imageRows: Array<any>;
}

const isSingleImgRow = imgRow => imgRow.image !== undefined;

export class Gallery extends Component<GalleryProps> {
  render() {
    return (
      <>
        {this.props.imageRows.map(imageRow => {
          if (isSingleImgRow(imageRow)) {
            return <SingleImgRow image={imageRow.image} />;
          } else {
            return (
              <DoubleImgRow image1={imageRow.image1} image2={imageRow.image2} />
            );
          }
        })}
      </>
    );
  }
}
