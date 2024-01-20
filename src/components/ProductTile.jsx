import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart)

  const handleAddCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemove =()=>{
    console.log(product.id);
    dispatch(removeFromCart(product.id));
  }
  return (
    <div style={{ width: "250px", margin: "2rem" }}>
      <img
        src={product?.image}
        alt={product?.title}
        style={{ width: "20vh", aspectRatio: "4/3" }}
      />
      <div>
        <p>{product.title}</p>
        <button
          onClick={
            cart.some((c) => c.id === product.id) ? handleRemove : handleAddCart
          }
        >
          {cart.some((c) => c.id === product.id) ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default ProductTile;
