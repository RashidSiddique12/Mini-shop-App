import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart?.reduce((acc, curr) => acc + curr.price, 0));
  });
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50vw" }}>
        {cart?.map((c) => (
          <div key={c.id}>
            <img
              src={c.image}
              alt={c.title}
              style={{ width: "20vh", aspectRatio: "4/3" }}
            />
            <div>
              <p>Price : {c.price}</p>
              <button onClick={() => handleRemove(c.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length <= 0 ? (
        <Link to="/">
          <button>show now</button>
        </Link>
      ) : (
        <div>
          <p>Total Item : {cart.length}</p>
          <p>Total Amount : {total}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
