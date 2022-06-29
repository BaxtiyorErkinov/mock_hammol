import React, { useEffect, useState } from "react";

//route
import { useParams, useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../store/action-creators/getProductById";

//styles
import "./productdetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((data) => data.product);
  const [activeImg, setActiveImg] = useState(product?.thumbnail);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  console.log(product);
  return (
    <>
    {product &&
      <div className="product__detail__container">
        <button className="backToPrevPage" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="product__detail">
          <div className="product__banner">
            <img src={activeImg} alt="" />
          </div>
          <div className="product__content">
            <h1 className="product__information">Product Information:</h1>
            <div className="top__section">
              <div className="brand">
                <span>{product?.brand}</span>
              </div>
              <div className="category">
                <span>{product?.category}</span>
              </div>
              <div className="rating">
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="bottom__section">
              <div className="title">
                <h2>{product.title}</h2>
              </div>
              <div className="description">
                <p>{product.description}</p>
              </div>
              <div className="images">
                {product?.images?.map((img) => (
                  <img src={img} alt="" onClick={() => setActiveImg(img)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default ProductDetail;
