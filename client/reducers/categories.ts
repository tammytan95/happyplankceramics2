// //this is a reducer that will update body images
// import { Action } from "redux";
// import { update, updateIn } from "timm";
// import { RootState } from ".";
// import { SingleImgRowInterface, DoubleImgRowInterface } from "../components";
// import { MenuItemProps } from "../components";
// import { Link, SingleLink } from "./components";

// export interface CategoriesState {
//   menuItems: Array<any>;
// }

// const initialState: CategoriesState = {
//   menuItems: [
//     {
//       displayName: "Shop",
//     links: {[
//         target: "All Page",
//                 displayName: "ALL",

//     ]
//       }
//     },
//     {
//       image1: {
//         displayName: "Img1",
//         imgTarget: "/qTpUrv3.png",
//         url: "https://i.imgur.com/qTpUrv3.png"
//       },
//       image2: {
//         displayName: "Img1",
//         imgTarget: "/dLcLkJH.png",
//         url: "https://i.imgur.com/dLcLkJH.png"
//       }
//     }
//   ]
// };

// const categories: (state: CategoriesState, action: any) => CategoriesState = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default categories;
