import { SEARCH_PRODUCTS, ERROR_MESSAGE } from "../action-types/";
import { api } from "../../server/api";

export const searchProductsAction = (query) => {
  return async (dispatch) => {
    try {
      const res = await api.searchProducts(query);
      dispatch({ type: SEARCH_PRODUCTS, payload: res.data });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE });
    }
  };
};
