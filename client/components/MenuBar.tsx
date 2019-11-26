// //HOW TO UPDATE MENU ITEM NAME AND LINK INFORMATION DYNAMICALLY?
// import React, { Component } from "react";
// import { MenuItemProps, MenuItemState, MenuItem } from "./MenuItem";

// interface MenuBarProps {
//   menuItems: MenuItemProps[]; //Shop, Magazine, About, Cart
// }

// export class MenuBar extends Component<MenuBarProps> {
//   render() {
//     const { menuItems } = this.props;

//     return (
//       <div style={{ border: "1px solid red" }}>
//         {menuItems.map((menuItems, i) => {
//           const { displayName } = menuItems;

//           return (
//             <MenuItem
//               {...{
//                 displayName
//               }}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }
