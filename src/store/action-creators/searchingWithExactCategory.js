import { SEARCH_WITH_EXACT_CATEGORY, ERROR_MESSAGE } from "../action-types/";
import { api } from "../../server/api";

export const searchWithExactCategory = (query, category) => {
  return async (dispatch) => {
    try {
      const res = await api.searchWithExactCategory(query, category);
      dispatch({ type: SEARCH_WITH_EXACT_CATEGORY, payload: res.data });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE });
    }
  };
};
