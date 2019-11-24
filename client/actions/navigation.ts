import { Action } from "redux";

export const setLocationActionCreator: (
  location: "homepage" | "aboutme"
) => Action = location => ({
  type: "SET_LOCATION",
  payload: { location }
});
