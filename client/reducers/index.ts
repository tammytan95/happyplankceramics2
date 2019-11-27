//combines all the reducers we will make, and the redux store will interact with this reducer
import navigation, * as fromNavigation from "./navigation";
import images, * as fromImages from "./images";

import { combineReducers } from "redux";

export interface RootState {
  navigation: fromNavigation.NavigationState;
  images: fromImages.ImagesState;
}

const reducers = combineReducers({
  navigation,
  images
});

export default reducers;
