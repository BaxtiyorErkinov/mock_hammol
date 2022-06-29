import React from "react";

//components
import ProductsItem from "./ProductsItem/";

//styles
import "./products.scss";

const ProductsList = ({ products }) => {
  return (
    <div className="products__container">
      <div className="products__list">
        {products?.products?.map((product) => (
          <ProductsItem product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
