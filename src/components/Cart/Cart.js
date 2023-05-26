import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const [totalIsUpdated, setTotalIsUpdated] = useState(false);

  const dispatch = useDispatch();

  const increaseQtyHandler = (item) => {
    dispatch(addToCart(item));
  };

  const decreaseQtyHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    setTotalIsUpdated(true);

    const timer = setTimeout(() => {
      setTotalIsUpdated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No Item in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((cartItem) => (
              <CartItem
                item={cartItem}
                onIncrease={() => increaseQtyHandler(cartItem)}
                onDecrease={() => decreaseQtyHandler(cartItem.id)}
                key={cartItem.id}
              />
            ))}
          </ul>
          <h3>
            Total:{" "}
            <span className={`${totalIsUpdated ? classes.bump : ""}`}>
              ${totalPrice}
            </span>
          </h3>
        </>
      )}
    </Card>
  );
};

export default Cart;
