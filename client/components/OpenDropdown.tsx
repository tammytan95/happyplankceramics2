import React, { Component } from "react";
import { Link, SingleLink } from "./Link";

interface OpenDropdownProps {
  links: SingleLink[];
}

export class OpenDropdown extends Component<OpenDropdownProps> {
  render() {
    const { links } = this.props;

    return (
      <div style={{ border: "1px solid black" }}>
        {links.map((link, i) => {
          const { target, displayName, handleOnClick } = link;
          //   console.log(displayName);
          return (
            <Link
              {...{
                target,
                displayName,
                handleOnClick,
                key: i
              }}
            />
          );
        })}
      </div>
    );
  }
}
