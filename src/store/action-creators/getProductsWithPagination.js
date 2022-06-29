import { GET_PRODUCTS_WITH_PAGINATION, ERROR_MESSAGE } from "../action-types/";
import { api } from "../../server/api";

export const getProductsWithPagination = (limit, offset) => {
  return async (dispatch) => {
    try {
      const res = await api.getProductsWithPagination(limit, offset);
      dispatch({ type: GET_PRODUCTS_WITH_PAGINATION, payload: res.data });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE });
    }
  };
};
