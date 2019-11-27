import React, { Component } from "react";
import { Link, SingleLink } from "./Link";
import { OpenDropdown } from "./OpenDropdown";

export interface MenuItemProps {
  displayName: string; //Shop
  links: SingleLink[]; //Cups, bowls, plates
}

export interface MenuItemState {
  isOpen: boolean;
}

export class MenuItem extends Component<MenuItemProps, MenuItemState> {
  constructor(props: MenuItemProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    const { displayName, links } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        style={{
          border: "1px solid blue"
        }}
      >
        <div
          onClick={() =>
            this.setState({
              isOpen: !isOpen
            })
          }
        >
          {displayName}
        </div>
        {isOpen ? <OpenDropdown links={links} /> : null}
      </div>
    );
  }
}
