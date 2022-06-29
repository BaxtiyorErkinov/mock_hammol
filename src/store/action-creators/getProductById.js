import { GET_PRODUCT_BY_ID, ERROR_MESSAGE } from "../action-types/";
import { api } from "../../server/api";

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const res = await api.getProductById(id);
      dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE });
    }
  };
};
