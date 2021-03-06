//this is a reducer that will update body images
import { Action } from "redux";
import { update, updateIn } from "timm";
import { RootState } from ".";
import { SingleImgRowInterface, DoubleImgRowInterface } from "../components";

export interface ImagesState {
  frontPgImages: Array<any>;
}

const initialState: ImagesState = {
  frontPgImages: [
    {
      image: {
        displayName: "Img1",
        imgTarget: "/OxzBo7A.png",
        url: "https://i.imgur.com/OxzBo7A.png"
      }
    },
    {
      image1: {
        displayName: "Img1",
        imgTarget: "/qTpUrv3.png",
        url: "https://i.imgur.com/qTpUrv3.png"
      },
      image2: {
        displayName: "Img1",
        imgTarget: "/dLcLkJH.png",
        url: "https://i.imgur.com/dLcLkJH.png"
      }
    }
  ]
};

const images: (state: ImagesState, action: any) => ImagesState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default images;
