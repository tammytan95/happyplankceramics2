import { Action } from "redux";

export const setLocationActionCreator: (
  location: "homepage" | "aboutme" | "productpage"
) => Action = location => ({
  type: "SET_LOCATION",
  payload: { location }
});

export const updateCurrentProductActionCreator: (
  currentProduct: string
) => Action = currentProduct => ({
  type: "UPDATE_CURRENT_PRODUCT",
  payload: { currentProduct }
});
