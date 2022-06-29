import { GET_PRODUCTS } from "../action-types/";
import { api } from "../../server/api";

export const getProductsAction = () => {
  return async (dispatch) => {
    const res = await api.getProducts();
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  };
};
