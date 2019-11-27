import React, { Component } from "react";
//exporting this so it can be used in other components
export interface SingleLink {
  //target is where the link will send us to
  target: string;
  displayName: string;
  //placeholder for function - this function will do whatever we tell it to do based on whatever function we pass in
  handleOnClick: (target: string) => void;
}
interface LinkProps extends SingleLink {}

//Link component requires linkprops properties
export class Link extends Component<LinkProps> {
  render() {
    const { target, displayName, handleOnClick } = this.props;
    console.log("from Link", displayName);

    return (
      <div
        style={
          {
            // border: "1px solid orange"
          }
        }
        onClick={() => {
          handleOnClick(target);
        }}
      >
        {displayName}
      </div>
    );
  }
}
