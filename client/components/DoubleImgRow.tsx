import React, { Component } from "react";
import { Image, SingleImage } from "./Image";

//copies the shape of Image from Image.tsx
export interface DoubleImgRowInterface extends DoubleImgRowProps {}

interface DoubleImgRowProps {
  image1: SingleImage;
  image2: SingleImage;
}

export class DoubleImgRow extends Component<DoubleImgRowProps> {
  render() {
    return (
      <div
        style={{
          border: "1px solid green",
          display: "flex"
        }}
      >
        <Image
          // Image interface is the same shape as Image Props and this is basically deconstructuring the keys in image props
          {...this.props.image1}
        ></Image>
        <Image
          // Image interface is the same shape as Image Props and this is basically deconstructuring the keys in image props
          {...this.props.image2}
        ></Image>
      </div>
    );
  }
}
