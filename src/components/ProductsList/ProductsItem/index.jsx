import React from "react";

//route
import { useNavigate } from "react-router-dom";

const ProductsItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product">
      <figure>
        <img
          src={product.thumbnail}
          alt="Product Image"
          className="product-image"
        />
        <div className="category">
          <span>{product.category}</span>
        </div>
      </figure>

      <div className="product-description">
        <div className="info">
          <h1>{product.title}</h1>
          <p>{product.description.slice(0, 40)}...</p>
        </div>

        <div className="price">{product.price}</div>
      </div>

      <div className="product-sidebar">
        <button className="buy">
          <span>BUY ITEM</span>
        </button>
        <button
          className="info"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <span>MORE INFO</span>
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
