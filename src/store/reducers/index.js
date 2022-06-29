import { combineReducers } from "redux";
//reducers
import { productsReducer } from "./productsReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productDetailReducer } from "./productDetailReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  product: productDetailReducer,
});
