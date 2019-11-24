//this is a reducer
import { Action } from "redux";
//update is a module that creates a deep copy of the object and only updates one key
//basically replaces Object.assign (shallow copy)
import { update, updateIn } from "timm";

import { RootState } from ".";
//traces where the user is in the site e.g.menu, page
//interface is the shape of an object
export interface NavigationState {
  location: "homepage" | "aboutme";
}
//var like initialState can have the shape of NavState
const initialState: NavigationState = {
  location: "homepage"
};

//navigation is function with type of function and takes in state and action as its params and returns type Navigation state
const navigation: (state: NavigationState, action: any) => NavigationState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_LOCATION": {
      return updateIn(state, ["location"], () => action.payload.location);
    }
  }
  return state;
};

export default navigation;

//function , not a reducer, that returns location
//this is a selector
export const locationSelector: (
  state: RootState
) => "homepage" | "aboutme" = state => state.navigation.location;
