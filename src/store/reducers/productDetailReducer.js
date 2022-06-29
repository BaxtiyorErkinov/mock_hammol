import { GET_PRODUCT_BY_ID } from "../action-types/";
const inititalState = {
  product: {},
};

export const productDetailReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
