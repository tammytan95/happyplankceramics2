import React, { Component } from "react";
import { string } from "prop-types";

//
interface ImageProps {
  displayName: string;
  imgTarget: string;
  url: string;
  handleOnClick: (target: string) => void;
}

//rename ImageProps to Image and export so it can be used in other components
export interface SingleImage extends ImageProps {}

export class Image extends Component<ImageProps> {
  render() {
    const { imgTarget, handleOnClick, url, displayName } = this.props;
    return (
      <div
        style={{ border: "1px solid green" }}
        onClick={() => {
          handleOnClick(imgTarget);
        }}
      >
        {displayName}
        <img src={url}></img>
      </div>
    );
  }
}
