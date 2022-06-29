import { GET_CATEGORIES } from "../action-types/";

const inititalState = {
  categories: [],
};

export const categoriesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
