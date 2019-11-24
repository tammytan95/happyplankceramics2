//combines all the reducers we will make, and the redux store will interact with this reducer
import navigation, * as fromNavigation from "./navigation";
import { combineReducers } from "redux";

export interface RootState {
  navigation: fromNavigation.NavigationState;
}

const reducers = combineReducers({
  navigation
});

export default reducers;
