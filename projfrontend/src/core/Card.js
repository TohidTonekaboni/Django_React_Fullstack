import React from "react";
import ImageHelper from "./helper/ImageHelper";
import { Navigate } from "react-router-dom";
import { addItemToCart,removeItemFromCart } from "./helper/cartHelper";




const isAuthenticated = true;

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const cardTitle = product ? product.name : "A photo from pixels";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "Default";
  const addToCart = () => {
    if (isAuthenticated) {
      addItemToCart(product,() => {})
      console.log("Added to cart");
    } else {
      console.log("Login Please!");
    }
  };

  const getAredirect = (red) => {
    if (red) {
      return <Navigate to="/cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id)
            console.log("Product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
