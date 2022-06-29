import Products from "../pages/Products/";
import ProductDetail from "../pages/ProductDetail/";

export const routes = [
  {
    path: "/",
    exact: false,
    component: Products,
  },
  {
    path: "/product/:id",
    exact: true,
    component: ProductDetail,
  },
];
