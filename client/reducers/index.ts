//combines all the reducers we will make, and the redux store will interact with this reducer
import navigation, * as fromNavigation from "./navigation";
import images, * as fromImages from "./images";
// import categories, * as fromCategories from "./categories";

import { combineReducers } from "redux";

export interface RootState {
  navigation: fromNavigation.NavigationState;
  images: fromImages.ImagesState;
  // categories: fromCategories.CategoriesState;
}

const reducers = combineReducers({
  navigation,
  images
  // categories
});

export default reducers;
