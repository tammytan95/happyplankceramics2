import React, { Component } from "react";
import { Image, SingleImage } from "./Image";

export interface SingleImgRowInterface extends SingleImgRowProps {}

interface SingleImgRowProps {
  image: SingleImage;
}

export class SingleImgRow extends Component<SingleImgRowProps> {
  render() {
    return (
      <div style={{ border: "1px solid green" }}>
        <Image
          // Image interface is the same shape as Image Props and this is basically deconstructuring the keys in image props
          {...this.props.image}
        ></Image>
      </div>
    );
  }
}
