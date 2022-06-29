import { FILTER_BY_CATEGORY, ERROR_MESSAGE } from "../action-types/";
import { api } from "../../server/api";

export const filterByCategoryAction = (category) => {
  return async (dispatch) => {
    try {
      const res = await api.productsFilterByCategory(category);
      dispatch({ type: FILTER_BY_CATEGORY, payload: res.data });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE });
    }
  };
};
