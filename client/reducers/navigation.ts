//this is a reducer
import { Action } from "redux";
//update is a module that creates a deep copy of the object and only updates one key
//basically replaces Object.assign (shallow copy)
import { update, updateIn } from "timm";

import { RootState } from ".";
//traces where the user is in the site e.g.menu, page
//interface is the shape of an object
export interface NavigationState {
  location: "homepage" | "aboutme" | "productpage" | "categorypage";
  currentProduct: string;
}
//var like initialState can have the shape of NavState
const initialState: NavigationState = {
  location: "homepage",
  currentProduct: ""
};

//navigation is function with type of function and takes in state and action as its params and returns type Navigation state
const navigation: (state: NavigationState, action: any) => NavigationState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_LOCATION": {
      //updateIn updates an object
      return updateIn(state, ["location"], () => action.payload.location);
    }
    case "UPDATE_CURRENT_PRODUCT": {
      return updateIn(
        state,
        ["currentProduct"],
        () => action.payload.currentProduct
      );
    }
  }
  return state;
};

export default navigation;

//function , not a reducer, that gets state of location
//this is a selector
export const locationSelector: (
  state: RootState
) => "homepage" | "aboutme" | "productpage" | "categorypage" = state =>
  state.navigation.location;

export const isLocationHomepageSelector: (
  state: RootState
) => boolean = state => state.navigation.location === "homepage";
