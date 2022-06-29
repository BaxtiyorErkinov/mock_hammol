import React, { useEffect } from "react";

//components
import ProductsList from "../../components/ProductsList/";
import Filters from "../../components/Filters/";
import Pagination from "../../components/Pagination/";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../store/action-creators/getProductsAction";

const Products = () => {
  const { error, loading, products } = useSelector((data) => data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div>
      <Filters />
      <ProductsList products={products} />
      {products.products && products.products.length >= 10 && <Pagination />}
    </div>
  );
};

export default Products;
