import React, { Component } from "react";
import { MenuItemProps, MenuItemState } from "./MenuItem";

interface MenuBarProps {}

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
      <div style={{ border: "1px solid blue" }}>
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
