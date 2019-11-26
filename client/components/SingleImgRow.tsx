import React, { Component } from "react";
import { string } from "prop-types";

interface SingleImgRowProps {
  displayName: string;
  imgTarget: string;
  img: string;
  handleOnClick: (target: string) => void;
}

export class SingleImgRow extends Component<SingleImgRowProps> {
  render() {
    const { imgTarget, handleOnClick, img, displayName } = this.props;
    return (
      <div
        style={{ border: "1px solid green" }}
        onClick={() => {
          handleOnClick(imgTarget);
        }}
      >
        {displayName}
      </div>
    );
  }
}
