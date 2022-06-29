import { GET_CATEGORIES } from "../action-types/";
import { api } from "../../server/api";

export const getCategoriesAction = () => {
  return async (dispatch) => {
    const res = await api.getCategories();
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  };
};
