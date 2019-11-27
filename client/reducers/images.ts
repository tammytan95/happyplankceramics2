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
        imgTarget: "/breeds/dane-great/n02109047_34093.jpg",
        url: "https://dog.ceo/img/dog.jpg"
      }
    },
    {
      image1: {
        displayName: "Img1",
        imgTarget: "/breeds/mastiff-bull/n02108422_2209.jpg",
        url: "https://dog.ceo/img/dog.jpg"
      },
      image2: {
        displayName: "Img1",
        imgTarget: "/breeds/papillon/n02086910_9041.jpg",
        url: "https://dog.ceo/img/dog.jpg"
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
