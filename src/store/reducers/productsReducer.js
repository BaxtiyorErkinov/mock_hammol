import {
  GET_PRODUCTS,
  FILTER_BY_CATEGORY,
  SEARCH_PRODUCTS,
  SEARCH_WITH_EXACT_CATEGORY,
  ERROR_MESSAGE,
  GET_PRODUCTS_WITH_PAGINATION,
} from "../action-types/";

const inititalState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_WITH_EXACT_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        error: "Data not found",
      };
    case GET_PRODUCTS_WITH_PAGINATION:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
